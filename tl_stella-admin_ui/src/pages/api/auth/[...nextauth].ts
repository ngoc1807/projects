import NextAuth, { B2CProfile, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";
import { toBase64 } from "src/utils/string";

export interface PlatformDetails {
  platformStackName?: string;
  platformApiToken?: string;
  platformApiTokenExpiresAt?: number;
}
interface CustomToken extends PlatformDetails, JWT {
  user?: User;
}

const basicAuth = `Basic ${toBase64(
  `${process.env.CCA_API_USERNAME}:${process?.env?.CCA_API_PASSWORD}`
)}`;

const refreshPlatformApiToken = async (token: CustomToken) => {
  if (!token.user) {
    return token;
  }
  const platformStackName =
    process.env.CCA_API_USE_SANDBOX || token.user.organizationID;
  const url = `${process.env.CCA_SERVICE_BASE_URL}/auth/api_key?name=${platformStackName}`;

  try {
    const apiTokenResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: basicAuth,
      },
    });
    const platformApiToken = await apiTokenResponse.text();

    return {
      ...token,
      platformStackName,
      platformApiToken,
      platformApiTokenExpiresAt: Date.now() + 1000 * 60 * 30, // 30 minutes
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return token;
  }
};

export default NextAuth({
  // debug: true,
  providers: [
    AzureADB2CProvider({
      tenantId: process.env.AZURE_AD_B2C_TENANT_NAME || "",
      clientId: process.env.AZURE_AD_B2C_CLIENT_ID || "",
      clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET || "",
      primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW || "",
      authorization: { params: { scope: "offline_access openid" } },
      profile(profile: B2CProfile) {
        // this is the default user profile from next-auth plus our custom Azure B2C fields
        return {
          id: profile.sub,
          name: profile.name,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.emails[0],
          organizationID: profile.extension_OrganizationID,
          defaultTenantID: profile.extension_DefaultTenantID,
          isInternalUser: profile.extension_InternalUser === true,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JWT | CustomToken;
      user?: User;
    }): Promise<CustomToken> {
      // Initial sign in, add user to the jwt token so that we can pull it in session function
      if (user) {
        return {
          ...token,
          user,
        };
      }

      const platformApiTokenExpiresAt = (token as CustomToken)
        .platformApiTokenExpiresAt;

      // Return previous token if the Platform api token has not expired yet
      if (
        platformApiTokenExpiresAt !== undefined &&
        platformApiTokenExpiresAt > Date.now()
      ) {
        return token;
      }

      // Platform pi token has expired, try to update it
      return await refreshPlatformApiToken(token);
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: CustomToken;
    }): Promise<Session> {
      const { user = {} as User, platformApiToken, platformStackName } = token;

      return {
        ...session,
        user,
        platformStackName,
        platformApiToken,
      };
    },
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url;
      } else if (url.startsWith("/")) {
        return new URL(url, baseUrl).toString();
      }
      return baseUrl;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/auth/logout",
    error: "/auth/error",
  },
  cookies: {},
});
