import 'styled-components';
import { ColorsType, TypographyType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    typography: TypographyType;
  }
}
