export const environment =
{
  production: true,
  envName: 'local',
  name: 'Blog Log PWA',
  version: '2.0.30',
  API:
  {
    URL: 'https://wt-84e05e4e456ba5978c5dae06eace99db-0.sandbox.auth0-extend.com/blog-log-service'
  },
  AUTH0:
  {
    audience: 'https://api.orchard.market',  // (MAKE SURE AUDIENCE IS SAME AUDIENCE VALUE FOR API...)
    clientId: 'C4s3bxi7p7oxzGGty3ElZvzBcA3wHO9p',
    domain: 'orchard-market.auth0.com',
    redirectUri: 'http://localhost:4200/callback',
    namespace: 'https://admin.orchard.market/'
  }
};
