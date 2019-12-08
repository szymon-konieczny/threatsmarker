export const getConfig = <T>(config: T, defaultConfig?: T): T => ({
  ...defaultConfig,
  ...config,
});
