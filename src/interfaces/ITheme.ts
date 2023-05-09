export interface ITheme {
  colors: {
    primary: string;

    white: string;
    grey: string;
    bg: string;
    text: string;
  };
  fontWeight: {
    bold: string;
    normal: string;
  };
  media: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}
