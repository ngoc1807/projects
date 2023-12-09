import {
  ArrowDropDown as ArrowDownIcon,
  ArrowDropUp as ArrowUpIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  DoNotDisturb as DoNotDisturbIcon,
  Looks3 as LooksThreeIcon,
  Looks4 as LooksFourIcon,
  Looks5 as LooksFiveIcon,
  LooksOne as LooksOneIcon,
  LooksTwo as LooksTwoIcon,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import {
  TransportType,
  TransportTypeLabels,
} from "src/features/onboarding/onboarding.types";

const not = (a: readonly TransportType[], b: readonly TransportType[]) =>
  a.filter((value) => !b.includes(value));

const intersection = (
  a: readonly TransportType[],
  b: readonly TransportType[]
) => a.filter((value) => b.includes(value));

const getNumberIcon = (index: number) => {
  switch (index) {
    case 0: {
      return <LooksOneIcon fontSize="small" color="primary" />;
    }
    case 1: {
      return <LooksTwoIcon fontSize="small" color="primary" />;
    }
    case 2: {
      return <LooksThreeIcon fontSize="small" color="primary" />;
    }
    case 3: {
      return <LooksFourIcon fontSize="small" color="primary" />;
    }
    case 4: {
      return <LooksFiveIcon fontSize="small" color="primary" />;
    }
    default: {
      return <CheckBoxOutlineBlankIcon fontSize="small" color="primary" />;
    }
  }
};

const getDecorationIcon = (
  decoration: "number" | "checkmark" | "none",
  isChecked: boolean,
  index: number
) => {
  if (decoration === "number") {
    return isChecked ? (
      <CheckBoxIcon fontSize="small" color="primary" />
    ) : (
      getNumberIcon(index)
    );
  } else if (decoration === "none") {
    return <DoNotDisturbIcon fontSize="small" color="primary" />;
  } else {
    return isChecked ? (
      <CheckBoxIcon fontSize="small" color="primary" />
    ) : (
      <CheckBoxOutlineBlankIcon fontSize="small" color="primary" />
    );
  }
};

interface TransportTypeTransferListProps {
  selectedTypes: TransportType[];
  onChange: (selectedTypes: TransportType[]) => void;
}

export const TransportTypeTransferList: FC<TransportTypeTransferListProps> = ({
  selectedTypes,
  onChange,
}) => {
  const theme = useTheme();
  const getUnselectedTransportTypes = () => {
    const allTransportTypes = Object.keys(TransportType).map(
      (type) => type as TransportType
    );
    return not(allTransportTypes, selectedTypes);
  };
  const [checked, setChecked] = useState<readonly TransportType[]>([]);
  const [left, setLeft] = useState<readonly TransportType[]>(
    getUnselectedTransportTypes()
  );
  const [right, setRight] = useState<readonly TransportType[]>(selectedTypes);
  const selectedTypesReference =
    useRef<readonly TransportType[]>(selectedTypes);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: TransportType) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const breakpointSmallAndUp = useMediaQuery(theme.breakpoints.up("sm"));
  const breakpointMediumAndUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleCheckedRight = () => {
    setRight([...right, ...leftChecked]);
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    // make sure to always leave one value on the right side

    const areAllRightChecked = rightChecked.length === right.length;
    // if all are checked then remove the first one from the array we are sending
    const rightCheckedFiltered = areAllRightChecked
      ? rightChecked.filter((_, index) => index !== 0)
      : rightChecked;

    setLeft([...left, ...rightCheckedFiltered]);
    setRight(not(right, rightCheckedFiltered));
    // but make sure to uncheck ALL that were selected
    setChecked(not(checked, rightChecked));
  };

  useEffect(() => {
    const selectionChanged = !Object.is(
      selectedTypesReference.current.toString(),
      right.toString()
    );

    if (!selectionChanged) {
      return;
    }

    if (onChange) {
      selectedTypesReference.current = [...right];
      onChange([...right]);
    }
  }, [right, onChange]);

  const customList = (
    items: readonly TransportType[],
    decoration: "number" | "checkmark" | "none",
    selectable: boolean
  ) => (
    <List
      dense
      component="div"
      role="list"
      disablePadding
      sx={{ width: breakpointSmallAndUp ? "auto" : "100%" }}
    >
      {items.map((value: TransportType, index: number) => {
        const labelId = `transfer-list-item-${value}-label`;
        const isChecked = checked.includes(value);

        return (
          <ListItem
            key={value}
            role="listitem"
            button
            onClick={handleToggle(value)}
            selected={selectable ? isChecked : undefined}
            dense
            disabled={!selectable}
          >
            <ListItemIcon sx={{ minWidth: 26 }}>
              {getDecorationIcon(decoration, isChecked, index)}
            </ListItemIcon>
            <ListItemText id={labelId} primary={TransportTypeLabels[value]} />
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={theme.customVariables.sectionSpacing}>
          <Grid
            item
            xs={12}
            md="auto"
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography
              variant="body2"
              textAlign="right"
              maxWidth={breakpointMediumAndUp ? 200 : "none"}
            >
              Transport types available / Priority Order
            </Typography>
          </Grid>
          <Grid item xs={12} md>
            <Grid
              container
              spacing={theme.customVariables.sectionSpacing}
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: 172 }}
            >
              <Grid
                item
                xs={12}
                sm={5}
                display="flex"
                justifyContent={breakpointSmallAndUp ? "flex-end" : "center"}
              >
                {customList(left, "checkmark", true)}
              </Grid>
              <Grid
                item
                xs={12}
                sm={2}
                display="flex"
                alignSelf="center"
                justifyContent="center"
              >
                <Button
                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  sx={{ minWidth: "0" }}
                >
                  {breakpointSmallAndUp ? <ArrowLeftIcon /> : <ArrowUpIcon />}
                </Button>
                <Button
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  sx={{ minWidth: "0" }}
                >
                  {breakpointSmallAndUp ? (
                    <ArrowRightIcon />
                  ) : (
                    <ArrowDownIcon />
                  )}
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={5}
                display="flex"
                justifyContent={breakpointSmallAndUp ? "flex-start" : "center"}
              >
                {customList(right, "number", true)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
