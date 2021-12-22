const size = {
  mobile: '360px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1920px',
};

const theme = {
  /* Color */
  colorBlack: '#262626',
  colorGray: '#8e8e8e',
  colorBackGroundGray: '#f7f6f5',
  colorProductGray: '#fafafa',
  colorWhite: '#fff',
  colorMint: '#5dc5cc',
  colorLightMint: '#eef9fa',
  /* Font size */
  fontLarge: '38px',
  fontSemiLarge: '28px',
  fontMedium: '22px',
  fontRegular: '14px',
  fontSmall: '12px',
  /* Font weight */
  weightBold: '700',
  weightSemiBold: '600',
  weightRegular: '500',
  weightThin: '300',
  /* Border */
  borderGray: '1px solid $colorGray',
  borderDarkgray: '1px solid rgb(103, 103, 103)',
  /* Margin */
  marginCenter: '0 auto',
  /* MediaQuery */
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default theme;
