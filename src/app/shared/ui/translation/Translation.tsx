import { useLocale } from 'app/shared/hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { TranslationProps } from './Translation.types';

export const Translation = ({ id, values }: TranslationProps) => {
  const { formatMessage } = useLocale();

  return <>{formatMessage({ id: AppMessages[id] }, values)}</>;
};
