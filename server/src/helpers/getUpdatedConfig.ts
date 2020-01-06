export const getUpdatedConfig = <T>(defaultConfig: T, configUpdate?: Partial<T>): T => ({
  ...defaultConfig,
  ...configUpdate,
});
