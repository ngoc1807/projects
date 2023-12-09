import "next-auth";
import { AzureB2CProfile } from "next-auth/providers/azure-ad-b2c";
import { PlatformDetails } from "src/pages/api/auth/[...nextauth]";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends PlatformDetails {
     user: User;
  }

  interface B2CProfile extends AzureB2CProfile{
    given_name: string;
    extension_OrganizationID: string;
    family_name: string;
    extension_DefaultTenantID: string;
    extension_InternalUser: boolean;

  }
  interface User {
    /** The user's postal address. */
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    organizationID: string;
    defaultTenantID: string;
    isInternalUser: boolean;
  }
}
