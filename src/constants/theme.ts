export const colors = {
  primary: '#07849A',
  primaryDark: '#043F4A',
  white: '#FFFFFF',
  text: '#2C2C2C',
  muted: '#8A8A8A',
  border: '#E6E6E6',
  cardLight: '#F3F7FB',
  mintLight: '#DFFFF3',
  blueLight: '#D9F7FF',
  pink: '#FF6F93',
  orange: '#FFC76B',
  grayBanner: '#8F9697',
  background: '#FFFFFF',
};

export const theme = {
  ...colors,
  mint: '#D8FFF0',
  mintAlt: '#CFFBEA',
  overlay: 'rgba(0,0,0,0.35)',
  searchPlaceholder: '#A7A7A7',
  tabBorder: '#F1F1F1',
  buttonBorder: '#ECECEC',
};

export const typography = {
  Inter: {
    400: {
      fontFamily: 'Inter_400Regular' as const,
      fontWeight: '400' as const,
    },
    500: {
      fontFamily: 'Inter_500Medium' as const,
      fontWeight: '500' as const,
    },
    600: {
      fontFamily: 'Inter_600SemiBold' as const,
      fontWeight: '600' as const,
    },
    700: {
      fontFamily: 'Inter_700Bold' as const,
      fontWeight: '700' as const,
    },
  },
};
