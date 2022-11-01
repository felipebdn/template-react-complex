import 'styled-components'
import { defautlTheme } from "../Components/Global/themes/default";

type ThemeType = typeof defautlTheme

declare module 'styled-components' {
  export interface defautlTheme extends ThemeType {}
}