// TODO: look into how to fix these eslint rules for this file
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextComponentType, NextPage, NextPageContext } from "next";
import { AppProps } from "next/app";
import { FC, ReactElement } from "react";

export interface AuthAndLayoutComponentConfig {
  authenticationDisabled: boolean;
  getLayout?: () => ReactElement;
}

export type ComponentWithAuth<PropsType = any> = FC<PropsType> &
  AuthAndLayoutComponentConfig;

export type NextComponentWithAuth = NextComponentType<
  NextPageContext,
  any,
  {}
> &
  Partial<AuthAndLayoutComponentConfig>;

export type ProtectedAppProps = AppProps & { Component: NextComponentWithAuth };

export type ProtectedPageProps = NextPage & {
  Component: NextComponentWithAuth;
};
