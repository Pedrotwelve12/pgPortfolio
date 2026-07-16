import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Stack, IconButton, Container, Divider, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { personal } from '../data/portfolioData';

const ROLES = ['Full Stack Developer', 'AWS Cloud Engineer', 'React & Node.js Expert', 'TypeScript Enthusiast'];

const FADE_UP = {
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
};

export default function Hero() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const STATS = [
    { value: '4+', label: t('hero.stats.yearsExp') },
    { value: 'AWS', label: t('hero.stats.cloudNative') },
    { value: 'TS / JS', label: t('hero.stats.primaryStack') },
    { value: 'C1', label: t('hero.stats.englishLevel') },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'flex-start', md: 'center' },
        pt: { xs: '88px', md: 0 },
        pb: { xs: 8, md: 0 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute', inset: 0,
          backgroundImage: isDark
            ? `linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)`
            : `linear-gradient(rgba(13,148,136,0.08) 1px, transparent 1px),
               linear-gradient(90deg, rgba(13,148,136,0.08) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: { xs: 300, md: 700 }, height: { xs: 300, md: 700 },
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(100,255,218,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(13,148,136,0.13) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute', bottom: '-15%', left: '-8%',
          width: { xs: 250, md: 500 }, height: { xs: 250, md: 500 },
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
        <Box sx={{ maxWidth: 820 }}>
          <Typography
            variant="body1"
            sx={{
              color: 'primary.main', fontFamily: '"JetBrains Mono", monospace',
              mb: 2, fontSize: '0.95rem',
              animation: 'fadeInUp 0.6s ease 0.1s both',
              ...FADE_UP,
            }}
          >
            {t('hero.greeting')}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' },
              color: 'text.primary', mb: 1, lineHeight: 1.1,
              animation: 'fadeInUp 0.6s ease 0.2s both',
              ...FADE_UP,
            }}
          >
            {personal.firstName}
            <Box component="span" sx={{ color: 'primary.main' }}> Gil</Box>
          </Typography>

          <Box
            sx={{
              display: 'flex', alignItems: 'center', gap: 1,
              mb: 3, minHeight: 56,
              animation: 'fadeInUp 0.6s ease 0.3s both', ...FADE_UP,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: 'text.secondary', fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2rem' } }}
            >
              {displayed}
              <Box
                component="span"
                sx={{
                  display: 'inline-block', width: 3, height: '1em',
                  bgcolor: 'primary.main', ml: '2px', verticalAlign: 'text-bottom',
                  animation: 'blink 0.8s step-end infinite',
                  '@keyframes blink': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
                }}
              />
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary', maxWidth: 580, mb: 4.5,
              fontSize: '1.05rem',
              animation: 'fadeInUp 0.6s ease 0.4s both', ...FADE_UP,
            }}
          >
            {t('hero.summary')}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mb: 5, animation: 'fadeInUp 0.6s ease 0.5s both', ...FADE_UP }}
          >
            <Button
              variant="contained" size="large" onClick={() => scrollTo('#contact')}
              sx={{
                bgcolor: 'primary.main', color: 'background.default',
                px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700,
                '&:hover': { bgcolor: 'rgba(100,255,218,0.85)', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(100,255,218,0.2)' },
                transition: 'all 0.2s',
              }}
            >
              {t('hero.getInTouch')}
            </Button>
            <Button
              variant="outlined" size="large" onClick={() => scrollTo('#projects')}
              sx={{
                borderColor: 'primary.main', color: 'primary.main',
                px: 4, py: 1.5, fontSize: '1rem',
                '&:hover': { bgcolor: 'rgba(100,255,218,0.06)', transform: 'translateY(-2px)' },
                transition: 'all 0.2s',
              }}
            >
              {t('hero.viewProjects')}
            </Button>
            {personal.resume && (
              <Button
                variant="text" size="large"
                href={personal.resume} target="_blank" rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
                sx={{
                  color: 'text.secondary', px: 2, py: 1.5, fontSize: '0.95rem',
                  '&:hover': { color: 'primary.main', bgcolor: 'rgba(100,255,218,0.04)', transform: 'translateY(-2px)' },
                  transition: 'all 0.2s',
                }}
              >
                {t('hero.resume')}
              </Button>
            )}
          </Stack>

          <Stack
            direction="row" spacing={1}
            sx={{ mb: 6, animation: 'fadeInUp 0.6s ease 0.6s both', ...FADE_UP }}
          >
            {[
              { icon: <LinkedInIcon />, href: personal.linkedin, label: 'LinkedIn' },
              { icon: <GitHubIcon />, href: personal.github, label: 'GitHub' },
              { icon: <EmailIcon />, href: `mailto:${personal.email}`, label: 'Email' },
            ].map((btn) => (
              <IconButton
                key={btn.label}
                href={btn.href}
                aria-label={btn.label}
                target={btn.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary', border: '1px solid rgba(100,255,218,0.2)',
                  '&:hover': {
                    color: 'primary.main', borderColor: 'primary.main',
                    transform: 'translateY(-3px)', bgcolor: 'rgba(100,255,218,0.06)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                {btn.icon}
              </IconButton>
            ))}
          </Stack>
          <Box
            sx={{
              display: 'flex', flexWrap: 'wrap', gap: { xs: 3, sm: 0 },
              animation: 'fadeInUp 0.6s ease 0.7s both', ...FADE_UP,
            }}
          >
            {STATS.map((s, i) => (
              <Box key={s.value} sx={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && (
                  <Divider
                    orientation="vertical" flexItem
                    sx={{
                      borderColor: 'rgba(100,255,218,0.15)', mx: 3,
                      display: { xs: 'none', sm: 'block' },
                    }}
                  />
                )}
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'primary.main', fontWeight: 800,
                      fontFamily: '"JetBrains Mono", monospace', lineHeight: 1.1,
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>
                    {s.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%,100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(8px)' },
          },
        }}
      >
        <IconButton
          onClick={() => scrollTo('#about')}
          aria-label={t('hero.scrollDown')}
          sx={{ color: 'primary.main', opacity: 0.7, '&:hover': { opacity: 1 } }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}
