import { createTheme } from '@mui/material/styles';

export function createAppTheme(mode) {
  const dark = mode === 'dark';
  return createTheme({
    palette: {
      mode,
      primary: {
        main: dark ? '#64ffda' : '#0d9488',
        contrastText: dark ? '#0a0a0a' : '#ffffff',
      },
      secondary: { main: '#7c3aed' },
      background: {
        default: dark ? '#0a0a0a' : '#f8fafc',
        paper:   dark ? '#111111' : '#ffffff',
      },
      text: {
        primary:   dark ? '#e6f1ff' : '#0f172a',
        secondary: dark ? '#8892b0' : '#64748b',
      },
      divider: dark ? 'rgba(100,255,218,0.12)' : 'rgba(13,148,136,0.15)',
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
}

export default createAppTheme('dark');
