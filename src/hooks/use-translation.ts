import { useLangContext } from '@/contexts/LangContext';
import { getTranslation } from '@/i18n';

export default function useTranslation() {
  const { dict } = useLangContext();

  const translate = (path: string) => getTranslation(dict, path);

  return { t: translate };
}
