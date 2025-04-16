import React from 'react';
import { useTranslation } from 'react-i18next';

type TranslateProps = {
  i18nKey: string;
  values?: Record<string, string>;
  className?: string;
  as?: React.ElementType;
};

/**
 * Komponenta pro snadný překlad textů
 * @param i18nKey - Klíč překladu v souborech překladu
 * @param values - Hodnoty pro interpolaci do překladu
 * @param className - CSS třídy
 * @param as - HTML element, který se má použít (div, span, p, h1, atd.)
 */
export const Translate: React.FC<TranslateProps> = ({
  i18nKey,
  values,
  className,
  as: Component = 'span'
}) => {
  const { t } = useTranslation();
  return <Component className={className}>{t(i18nKey, values)}</Component>;
};

export default Translate; 