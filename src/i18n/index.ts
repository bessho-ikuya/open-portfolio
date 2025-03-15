import i18nConfig, { type Langs } from '@/i18n/config';

const dictionaries = i18nConfig.locales.reduce(
  (acc, lang) => {
    acc[lang] = async () => {
      const mainDict = await import(`./dictionaries/${lang}.json`).then((module) => module.default);
      const settingDict = await import(`./dictionaries/${lang}_setting.json`).then(
        (module) => module.default
      );
      return {
        ...mainDict,
        setting: settingDict,
      };
    };
    return acc;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  {} as { [K in Langs]: () => Promise<any> }
);

export const getDictionary = async (locale: Langs) => dictionaries[locale] ? dictionaries[locale]() : dictionaries.ja();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTranslation = (dict: any, path: string) => {
  const keys = path.split('.');
  let result = dict;
  for (const key of keys) {
    if (result === undefined) {
      return path;
    }
    result = result[key];
  }
  return result;
};

export const createTranslator = async (locale: Langs) => {
  const dict = await getDictionary(locale);
  return <T = string>(path: string): T => getTranslation(dict, path) as T;
};
