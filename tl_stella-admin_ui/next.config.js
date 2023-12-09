/** @type {import('next').NextConfig} */

module.exports = {
  // reactStrictMode: true, // would love to use this, but it breaks redux
  experimental: {
    reactRoot: false,
    workerThreads: true,
  },
  env: {
    APP_URL: process.env.APP_URL,
    CCA_SERVICE_BASE_URL: process.env.CCA_SERVICE_BASE_URL,
    MUI_LICENSE_KEY: process.env.MUI_LICENSE_KEY,
  },
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: process.env.NODE_ENV === "production" ? true : false,
  },
  async redirects() {
    return [
      {
        source: "/logout",
        destination: `https://${
          process?.env?.AZURE_AD_B2C_TENANT_NAME ?? ""
        }.b2clogin.com/${
          process?.env?.AZURE_AD_B2C_TENANT_NAME ?? ""
        }.onmicrosoft.com/${
          process?.env?.AZURE_AD_B2C_PRIMARY_USER_FLOW ?? ""
        }/oauth2/v2.0/logout?post_logout_redirect_uri=${
          process?.env?.APP_URL ?? ""
        }/auth/logout`,
        permanent: true,
        basePath: false,
      },
    ];
  },
};
