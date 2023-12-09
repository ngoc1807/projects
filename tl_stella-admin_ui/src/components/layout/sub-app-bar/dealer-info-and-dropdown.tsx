import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import { alpha, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { FC, useCallback, useEffect, useState } from "react";
import { CustomSkeleton } from "src/components/custom-skeleton/custom-skeleton";
import {
  currentOrganizationSelector,
  Organization,
  selectedTenantSelector,
  Tenant,
  updateCurrentOrganization,
  updateSelectedTenant,
} from "src/features/organization/organization.slice";
import { platformOrgApi } from "src/services/platform/org";
import { platformTenantApi } from "src/services/platform/tenant";
import { userAccessApi } from "src/services/user-access";
import { useAppDispatch, useAppSelector } from "src/store/store";

export const DealerInfoAndDropdown: FC = () => {
  const theme = useTheme();
  const { data: session } = useSession();
  const [organizations, setOrganizations] = useState<Organization[]>();
  const [tenants, setTenants] = useState<Tenant[]>();
  const currentOrganization = useAppSelector(currentOrganizationSelector);
  const selectedTenant = useAppSelector(selectedTenantSelector);
  const dispatch = useAppDispatch();

  const getOrganizations = useCallback(
    async (user: User) => {
      const { data = [] } = await dispatch(
        platformOrgApi.endpoints.getOrgDetails.initiate(
          // for internal user fetch all the organization by passing id=''
          user.isInternalUser ? "" : user.organizationID
        )
      );

      return data;
    },
    [dispatch]
  );

  const getTenants = useCallback(
    async (organizations: Organization[]) => {
      const tenants: Tenant[] = [];
      for (const organization of organizations) {
        const tenantsResponse = await dispatch(
          platformTenantApi.endpoints.getTenants.initiate(organization.id)
        );

        if (tenantsResponse.data) {
          tenants.push(...tenantsResponse.data);
        }
      }
      return tenants;
    },
    [dispatch]
  );

  const getFilteredTenants = useCallback(
    async (user: User, tenants: Tenant[]) => {
      const userAccessResponse = await dispatch(
        userAccessApi.endpoints.userAccess.initiate(user.id)
      );

      const salesforceTenantIdRegEx = /^[\dA-Za-z]{15}(?:[\dA-Za-z]{2,3})?$/;
      const filteredTenants = user.isInternalUser
        ? tenants.filter(
            ({ id }) =>
              // id should be a valid salesforce tenant id e.g. '0015f00000DwPWM'
              salesforceTenantIdRegEx.test(id) && id.slice(0, 3) === "001" // Prefix '001' is for 'Account' (https://github.com/peek-travel/salesforce-id-validator/blob/master/src/prefixLookupTable.js)
          )
        : tenants.filter((tenant) =>
            userAccessResponse.data?.tenants?.includes(tenant.id)
          );

      return filteredTenants;
    },
    [dispatch]
  );

  const populateTenants = useCallback(
    async (user: User) => {
      const organizations = await getOrganizations(user);
      setOrganizations(organizations);
      const tenants = await getTenants(organizations);
      const filteredTenants = await getFilteredTenants(user, tenants);
      setTenants(filteredTenants);
    },
    [getOrganizations, getTenants, getFilteredTenants]
  );

  useEffect(() => {
    if (!organizations || !session?.user) {
      return;
    }

    const currentOrganization = session?.user.isInternalUser
      ? { id: "", name: "STELLA Internal" } // return this dummy organization for internal users
      : organizations.find(
          (organization) => organization.id === session?.user.organizationID
        ) || organizations[0];
    dispatch(updateCurrentOrganization(currentOrganization));
  }, [dispatch, session?.user, organizations]);

  useEffect(() => {
    if (!session?.user.defaultTenantID || !tenants || selectedTenant) {
      return;
    }

    // make the default tenant the selected tenant
    const result = tenants.find(
      (tenant) => session?.user.defaultTenantID === tenant.id
    );

    dispatch(updateSelectedTenant(result || tenants[0]));
  }, [dispatch, session?.user.defaultTenantID, tenants, selectedTenant]);

  useEffect(() => {
    if (session?.user && !tenants) {
      populateTenants(session.user);
    }
  }, [session?.user, tenants, populateTenants]);

  const handleTenantChange = (tenant: Tenant) => {
    dispatch(updateSelectedTenant(tenant));
  };

  const DealerDropdown = (
    <>
      <Typography
        variant="h6"
        sx={{
          whiteSpace: "pre-wrap",
          display: "inline",
        }}
      >
        {currentOrganization?.name}
        {"  |  "}
      </Typography>
      <Select
        value={selectedTenant?.id}
        autoWidth
        variant="standard"
        sx={{
          color: "inherit",
          "& .MuiSelect-select.MuiInput-input.MuiInputBase-input": {
            fontSize: theme.typography.h6.fontSize,
            lineHeight: theme.typography.h6.lineHeight,
            fontWeight: theme.typography.fontWeightBold,
            paddingRight: 0,
            paddingBottom: 0,
            paddingTop: 0,
          },
        }}
        IconComponent={() => <KeyboardArrowDownIcon color="inherit" />}
        disableUnderline
      >
        {(tenants || []).map((tenant) => {
          return (
            <MenuItem
              key={tenant.id}
              value={tenant.id}
              onClick={() => handleTenantChange(tenant)}
            >
              {tenant.name}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );

  const DealerName = (
    <Typography
      variant="h6"
      sx={{
        whiteSpace: "pre-wrap",
        display: "inline",
      }}
    >
      {selectedTenant?.name}
    </Typography>
  );

  // SKELETON: uncomment this to show skeleton load
  // tenants = undefined;

  if (tenants && currentOrganization?.name && selectedTenant?.name) {
    return tenants.length > 1 ? DealerDropdown : DealerName;
  } else {
    return (
      <CustomSkeleton
        width={400}
        height={32}
        sx={{ backgroundColor: alpha(theme.palette.background.paper, 0.35) }}
      />
    );
  }
};
