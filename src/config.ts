interface Config {
  chainId: number;
}

function createConfig() {
  let config: Config = {
    chainId: 1,
  };

  return {
    set: (key: keyof Config, value: any) => (config[key] = value),
    get: (key: keyof Config) => config[key],
  };
}

export const config = createConfig();
