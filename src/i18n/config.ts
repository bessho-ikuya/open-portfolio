const defaultLocales = ['en', 'ja'] as const;

const getLocalesFromEnv = (): readonly string[] => {
  const envLocales = process.env.NEXT_PUBLIC_LOCALES;
  if (!envLocales) return defaultLocales;

  const locales = envLocales.split(',').map((locale) => locale.trim());
  return locales.length > 0 ? locales : defaultLocales;
};

const locales = getLocalesFromEnv();
const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || locales[0];

const i18nConfig = {
  locales,
  defaultLocale,
  prefixDefault: false, // デフォルトlocalのprefixを付けるかどうか
} as const;

export type Langs = string;

export default i18nConfig;
