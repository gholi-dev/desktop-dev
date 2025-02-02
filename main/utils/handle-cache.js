const fs = require('fs-extra');
const { envConfig } = require('../configs/envConfig');
const logger = require('../configs/logger');

async function liaraCache() {
  let liaraAuthJson;

  const liaraCachePath = envConfig.GLOBAL_CACHE_PATH;

  try {
    liaraAuthJson =
      ((await fs.pathExists(envConfig.NEW_GLOBAL_CONFIG_PATH)) &&
        (await fs.readJSON(envConfig.NEW_GLOBAL_CONFIG_PATH, {
          throws: false,
        }))) ||
      {};

    if (!liaraAuthJson.accounts) {
      liaraAuthJson =
        ((await fs.pathExists(envConfig.GLOBAL_CONF_PATH)) &&
          (await fs.readJSON(envConfig.GLOBAL_CONF_PATH, { throws: false }))) ||
        {};
    }

    const liaraCacheJson =
      ((await fs.pathExists(liaraCachePath)) &&
        (await fs.readJson(liaraCachePath, { throws: false }))) ||
      {};

    const current =
      liaraAuthJson.accounts &&
      Object.entries(liaraAuthJson.accounts).find((account) => {
        if (account[1].current) {
          return account[0];
        }
      });

    return liaraCacheJson[current[0]];
  } catch (error) {
    logger.error(error);
  }
}

module.exports = liaraCache;
