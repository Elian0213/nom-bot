import * as fs from 'file-system';

export default {
  loadConfigFromPath: (path: string): Config => {
    const config = JSON.parse(fs.readFileSync(path).toString()) as Config;
    if (config == null) {
      throw new Error('config was not read properly. Please copy config.example.json and fill in the properties.');
    }

    return config;
  },
};
