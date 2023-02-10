const environments = {
  development: {
    API_URL: 'http://localhost:3000',
  },
  production: {
    API_URL: 'https://production-api.example.com',
  },
};

const environment = process.env.NODE_ENV || 'development';
const config = environments[environment];

module.exports = config;