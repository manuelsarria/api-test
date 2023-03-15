module.export = {
  apps: [
    {
      name: 'my-app',
      script: '/root/api-test/src/index.js',
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    }
  ],
  deploy : {
    production : {
      POBOX_ZIPCODE: '33172-2779',
      CUSTOMER_NAME: 'Tracking PTY',
      CUSTOMER_WEBSITE: 'trackingpanama.com',
      MAIL_FROM: 'trackingpty@trackingpanama.com',
      MAIL_TO_ADMIN: 'casilleros@trackingpanama.com',
      POBOX_ADDRESS: '1345 NW 98TH CT, ST2 SP',
      POBOX_COUNTRY: 'Estados Unidos',
      POBOX_PHONE: '(786) 360-2816',
      POBOX_STATE:' Miami, Florida',
      SERVER_MAIL: 'in-v3.mailjet.com',
      SERVER_MAIL_AUTH_PWD: '7b320ca51fc9c26e27afeefcc61afd62',
      SERVER_MAIL_AUTH_USER: 'ced8911a15a18484fce5d3aaff9be923',
      SERVER_MAIL_PORT: '465',
      SERVER_MAIL_secure: 'true'
    }
  }
}
