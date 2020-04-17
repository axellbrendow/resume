const getOne = async (locale: string) =>
  (await import(`./${locale}.json`)).default;

export default { getOne };
