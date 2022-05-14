interface Config {
  chainId: number;
}

function createConfig() {
  let config: Config = {
    chainId: 1,
  };

  return {
    set: (key: keyof Config, value: any) => (config[key] = value),
    ...config,
  };
}

export const config = createConfig();
