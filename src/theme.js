import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#64ffda', contrastText: '#0a0a0a' },
    secondary: { main: '#7c3aed' },
    background: { default: '#0a0a0a', paper: '#111111' },
    text: { primary: '#e6f1ff', secondary: '#8892b0' },
    divider: 'rgba(100,255,218,0.12)',
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.65 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 8 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem' },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
  },
});

export default theme;
