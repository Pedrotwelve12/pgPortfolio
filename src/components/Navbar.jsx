import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { navLinks } from '../data/portfolioData';
import { useColorMode } from '../ThemeContext';

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact'];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -55% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = useCallback((href) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const { t, i18n } = useTranslation();
  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  }, [i18n]);

  const { toggleColorMode, mode: colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const isActive = (href) => href === `#${activeSection}`;

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: scrolled
              ? isDark ? 'rgba(10,10,10,0.92)' : 'rgba(248,250,252,0.92)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled
              ? `1px solid ${isDark ? 'rgba(100,255,218,0.08)' : 'rgba(13,148,136,0.12)'}`
              : 'none',
            transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
            overflow: 'hidden',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
            <Typography
              variant="h6"
              component="button"
              aria-label="Back to top"
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                color: 'primary.main',
                fontWeight: 700,
                cursor: 'pointer',
                userSelect: 'none',
                background: 'none',
                border: 'none',
                p: 0,
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {'<PG />'}
            </Typography>

            {isMobile ? (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                aria-label="Open navigation menu"
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', flexShrink: 0 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    onClick={() => handleNav(link.href)}
                    sx={{
                      color: isActive(link.href) ? 'primary.main' : 'text.secondary',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.82rem',
                      px: 1.5,
                      minWidth: 140,
                      whiteSpace: 'nowrap',
                      position: 'relative',
                      '&:hover': { color: 'primary.main', bgcolor: 'rgba(100,255,218,0.05)' },
                      '&::after': isActive(link.href)
                        ? {
                            content: '""',
                            position: 'absolute', bottom: 4, left: '50%',
                            transform: 'translateX(-50%)',
                            width: 16, height: 2,
                            bgcolor: 'primary.main', borderRadius: 1,
                          }
                        : {},
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ color: 'primary.main', fontSize: '0.7rem', mr: 0.5, opacity: 0.7 }}
                    >
                      {link.num}
                    </Box>
                    {t(`nav.${link.label.toLowerCase()}`)}
                  </Button>
                ))}
                <Button
                  onClick={toggleLanguage}
                  aria-label="Toggle language"
                  sx={{
                    ml: 1, minWidth: 44, px: 1,
                    color: 'text.secondary',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                    border: '1px solid rgba(100,255,218,0.2)',
                    borderRadius: 1.5,
                    letterSpacing: 0.5,
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'rgba(100,255,218,0.05)' },
                    transition: 'all 0.2s',
                  }}
                >
                  {i18n.language === 'en' ? 'ES' : 'EN'}
                </Button>
                <IconButton
                  onClick={toggleColorMode}
                  aria-label="Toggle color mode"
                  size="small"
                  sx={{
                    ml: 0.5,
                    color: 'text.secondary',
                    border: '1px solid rgba(100,255,218,0.2)',
                    borderRadius: 1.5,
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'rgba(100,255,218,0.05)' },
                    transition: 'all 0.2s',
                  }}
                >
                  {isDark ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
                </IconButton>
                <Button
                  variant="outlined"
                  onClick={() => handleNav('#contact')}
                  sx={{
                    ml: 1,
                    minWidth: 116,
                    whiteSpace: 'nowrap',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.82rem',
                    '&:hover': { bgcolor: 'rgba(100,255,218,0.08)', borderColor: 'primary.main' },
                  }}
                >
                  {t('nav.hireMe')}
                </Button>
              </Box>
            )}
          </Toolbar>

          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute', bottom: 0, left: 0,
              height: 2, bgcolor: 'primary.main',
              width: `${scrollProgress}%`,
              transition: 'width 0.1s linear',
              opacity: scrolled ? 1 : 0,
            }}
          />
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: 'background.paper', width: 280, p: 3 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              color: 'primary.main', fontWeight: 700, fontSize: '1rem',
            }}
          >
            {'<PG />'}
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
            sx={{ color: 'primary.main' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List disablePadding>
          {navLinks.map((link) => (
            <ListItem
              key={link.label}
              onClick={() => handleNav(link.href)}
              sx={{
                borderRadius: 2, mb: 0.5, cursor: 'pointer',
                bgcolor: isActive(link.href) ? 'rgba(100,255,218,0.06)' : 'transparent',
                '&:hover': { bgcolor: 'rgba(100,255,218,0.06)' },
                transition: 'background-color 0.2s',
              }}
            >
              <Box
                component="span"
                sx={{
                  color: 'primary.main', fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.72rem', mr: 1.5, opacity: 0.7,
                }}
              >
                {link.num}
              </Box>
              <ListItemText
                primary={t(`nav.${link.label.toLowerCase()}`)}
                primaryTypographyProps={{
                  fontFamily: '"JetBrains Mono", monospace',
                  color: isActive(link.href) ? 'primary.main' : 'text.primary',
                  fontSize: '1rem',
                  fontWeight: isActive(link.href) ? 600 : 400,
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 0 }}>
            <Button
              fullWidth
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              sx={{
                color: 'text.secondary',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.8rem',
                border: '1px solid rgba(100,255,218,0.2)',
                borderRadius: 1.5,
                gap: 1,
                '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'rgba(100,255,218,0.05)' },
              }}
            >
              {isDark ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </ListItem>
          <ListItem sx={{ mt: 1, px: 0 }}>
            <Button
              fullWidth
              onClick={toggleLanguage}
              aria-label="Toggle language"
              sx={{
                color: 'text.secondary',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.8rem',
                border: '1px solid rgba(100,255,218,0.2)',
                borderRadius: 1.5,
                letterSpacing: 1,
                '&:hover': { color: 'primary.main', borderColor: 'primary.main', bgcolor: 'rgba(100,255,218,0.05)' },
              }}
            >
              {i18n.language === 'en' ? 'Switch to ES' : 'Cambiar a EN'}
            </Button>
          </ListItem>
          <ListItem sx={{ mt: 1, px: 0 }}>
            <Button
              fullWidth variant="outlined"
              onClick={() => handleNav('#contact')}
              sx={{
                borderColor: 'primary.main', color: 'primary.main',
                fontFamily: '"JetBrains Mono", monospace',
                '&:hover': { bgcolor: 'rgba(100,255,218,0.08)' },
              }}
            >
              {t('nav.hireMe')}
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
