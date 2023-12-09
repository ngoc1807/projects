/* eslint-disable unicorn/prefer-spread */
import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { Context, createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { onboardingSlice } from "src/features/onboarding/onboarding.slice";
import { organizationSlice } from "src/features/organization/organization.slice";
import { automotiveConfigApi } from "src/services/platform/automotive-config";
import { platformConfigApi } from "src/services/platform/config";
import { platformOperationsApi } from "src/services/platform/operations";
import { platformOrgApi } from "src/services/platform/org";
import { ccaReportingApi } from "src/services/platform/reporting";
import { platformTenantApi } from "src/services/platform/tenant";
import { userAccessApi } from "src/services/user-access";

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      [organizationSlice.name]: organizationSlice.reducer,
      [onboardingSlice.name]: onboardingSlice.reducer,
      [platformOrgApi.reducerPath]: platformOrgApi.reducer,
      [platformTenantApi.reducerPath]: platformTenantApi.reducer,
      [platformOperationsApi.reducerPath]: platformOperationsApi.reducer,
      [platformConfigApi.reducerPath]: platformConfigApi.reducer,
      [userAccessApi.reducerPath]: userAccessApi.reducer,
      [ccaReportingApi.reducerPath]: ccaReportingApi.reducer,
      [automotiveConfigApi.reducerPath]: automotiveConfigApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(
          nextReduxCookieMiddleware({
            subtrees: [organizationSlice.name],
            maxAge: 60 * 30, // 30 minutes
          })
        )
        .concat(platformOrgApi.middleware)
        .concat(platformTenantApi.middleware)
        .concat(platformOperationsApi.middleware)
        .concat(platformConfigApi.middleware)
        .concat(userAccessApi.middleware)
        .concat(ccaReportingApi.middleware)
        .concat(automotiveConfigApi.middleware),
    devTools: true,
  })
);

const store = (context: Context) => makeStore(context);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  AnyAction
>;
export const wrapper = createWrapper<AppStore>(store);
