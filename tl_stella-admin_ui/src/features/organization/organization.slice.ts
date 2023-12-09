import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "src/store/store";

export interface OrganizationState {
  currentOrganization?: Organization;
  selectedTenant?: Tenant;
}

export interface Organization {
  id: string;
  name: string;
  admin_user?: string;
  billing_org?: string;
  contact_info?: string;
  contact_name?: string;
  created_at?: string;
  detail?: string;
  short_code?: string;
  status?: string;
}

export interface Tenant {
  id: string;
  name: string;
  created_at: string;
  org_id: string;
  short_code: string;
  status: string;
}

const initialState: OrganizationState = {};

export const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    updateCurrentOrganization(
      state,
      action: PayloadAction<Organization | undefined>
    ) {
      return { ...state, currentOrganization: action.payload };
    },

    updateSelectedTenant(state, action: PayloadAction<Tenant | undefined>) {
      return {
        ...state,
        selectedTenant: action.payload,
      };
    },
    reset() {
      return initialState;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => ({
      ...state,
      ...payload.organization,
    }),
  },
});

export const { updateCurrentOrganization, updateSelectedTenant, reset } =
  organizationSlice.actions;

export const currentOrganizationSelector = (state: AppState) =>
  state[organizationSlice.name].currentOrganization;

export const selectedTenantSelector = (state: AppState) =>
  state[organizationSlice.name]?.selectedTenant;
