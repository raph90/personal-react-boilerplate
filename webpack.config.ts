module.exports = (env: any) => {
  const envString = env.development ? 'development' : 'production';
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const config = require('./webpack.' + envString);
  return config;
};
