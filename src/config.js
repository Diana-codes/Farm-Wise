// next
import { Roboto } from 'next/font/google';

// ==============================|| THEME CONSTANT ||============================== //

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const APP_DEFAULT_PATH = '/dashboard/default';
export const HORIZONTAL_MAX_ITEM = 7;
export const HEADER_HEIGHT = 74;
const roboto = Roboto({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['300', '400', '500', '700'],
  adjustFontFallback: false
});

export let ThemeMode;

(function (ThemeMode) {
  ThemeMode['LIGHT'] = 'light';
  ThemeMode['DARK'] = 'dark';
  ThemeMode['AUTO'] = 'auto';
})(ThemeMode || (ThemeMode = {}));

export let MenuOrientation;

(function (MenuOrientation) {
  MenuOrientation['VERTICAL'] = 'vertical';
  MenuOrientation['HORIZONTAL'] = 'horizontal';
})(MenuOrientation || (MenuOrientation = {}));

export let ThemeDirection;

(function (ThemeDirection) {
  ThemeDirection['LTR'] = 'ltr';
  ThemeDirection['RTL'] = 'rtl';
})(ThemeDirection || (ThemeDirection = {}));

export let NavActionType;

(function (NavActionType) {
  NavActionType['FUNCTION'] = 'function';
  NavActionType['LINK'] = 'link';
})(NavActionType || (NavActionType = {}));

export let Gender;

(function (Gender) {
  Gender['MALE'] = 'Male';
  Gender['FEMALE'] = 'Female';
})(Gender || (Gender = {}));

export let DropzopType;

(function (DropzopType) {
  DropzopType['default'] = 'DEFAULT';
  DropzopType['standard'] = 'STANDARD';
})(DropzopType || (DropzopType = {}));

// ==============================|| THEME CONFIG ||============================== //

const config = {
  fontFamily: roboto.style.fontFamily,
  i18n: 'en',
  menuOrientation: MenuOrientation.VERTICAL,
  menuCaption: true,
  container: false,
  mode: ThemeMode.LIGHT,
  presetColor: 'default',
  themeDirection: ThemeDirection.LTR,
  themeContrast: false
};

export default config;