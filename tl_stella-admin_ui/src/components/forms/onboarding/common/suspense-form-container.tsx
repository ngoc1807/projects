import { PageLoading } from "src/components/layout/page-loading";
import { FC, ReactElement, Suspense } from "react";

interface Props {
  children: ReactElement;
}

const Loader: FC = () => {
  return <PageLoading />;
};

const SuspenseFormContainerContent: FC<Props> = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export const SuspenseFormContainer = SuspenseFormContainerContent;
