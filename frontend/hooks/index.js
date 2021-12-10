import { createMakeAndWithStyles } from 'tss-react';
import theme from 'theme';

export const { makeStyles, withStyles } = createMakeAndWithStyles({ useTheme: () => theme });
export { default as useGlobalContext } from './useGlobalContext';
export { default as useTitle } from './useTitle';
