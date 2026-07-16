import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Box, Container, Grid, Typography, Chip, Stack, Divider, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CodeIcon from '@mui/icons-material/Code';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { useInView } from 'react-intersection-observer';
import { personal, education, languages } from '../data/portfolioData';

const METRICS_CONFIG = [
  { Icon: WorkOutlineIcon, value: '4+', tKey: 'about.metrics.yearsExp' },
  { Icon: CodeIcon, value: '10+', tKey: 'about.metrics.technologies' },
  { Icon: CloudOutlinedIcon, value: 'AWS', tKey: 'about.metrics.cloudPlatform' },
  { Icon: GroupsOutlinedIcon, value: 'Agile', tKey: 'about.metrics.methodology' },
];

export default function About() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const METRICS = METRICS_CONFIG.map(({ Icon, value, tKey }) => ({
    icon: <Icon sx={{ color: 'primary.main', fontSize: 28 }} />,
    value,
    label: t(tKey),
  }));

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 10 },
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.7s ease',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ color: 'primary.main', fontFamily: '"JetBrains Mono", monospace', mb: 1 }}>
          {t('about.sectionLabel')}
        </Typography>
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 1 }}>{t('about.title')}</Typography>
        <Box sx={{ width: 60, height: 3, bgcolor: 'primary.main', borderRadius: 2, mb: 6 }} />

        <Grid container spacing={2.5} sx={{ mb: 7 }}>
          {METRICS.map((m) => (
            <Grid item xs={6} sm={3} key={m.tKey || m.label}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(100,255,218,0.1)',
                  borderRadius: 3, p: { xs: 2, md: 2.5 },
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1,
                  transition: 'border-color 0.25s, transform 0.25s',
                  '&:hover': {
                    borderColor: 'rgba(100,255,218,0.35)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                {m.icon}
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.primary', fontWeight: 800,
                      fontFamily: '"JetBrains Mono", monospace', lineHeight: 1.1,
                    }}
                  >
                    {m.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>
                    {m.label}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={7}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.05rem' }}>
              <Trans
                i18nKey="about.bio1"
                components={{
                  highlight: <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }} />,
                }}
              />
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.05rem' }}>
              <Trans
                i18nKey="about.bio2"
                components={{
                  strong: <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }} />,
                }}
              />
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem' }}>
              {t('about.bio3')}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 4, gap: 1 }}>
              {['TypeScript', 'React', 'Node.js', 'AWS', 'NestJS', 'GraphQL'].map((tech) => (
                <Chip
                  key={tech} label={tech} size="small" variant="outlined"
                  sx={{ borderColor: 'rgba(100,255,218,0.3)', color: 'primary.main' }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ bgcolor: 'background.paper', border: '1px solid rgba(100,255,218,0.1)', borderRadius: 3, p: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{personal.location}</Typography>
              </Stack>

              <Divider sx={{ my: 2, borderColor: 'rgba(100,255,218,0.08)' }} />

              <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mb: 2 }}>
                <SchoolIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}>{t('about.sidebar.education')}</Typography>
                  {education.map((e) => (
                    <Box key={e.degree} sx={{ mb: 1.5 }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>{e.degree}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.7 }}>
                        {e.institution} · {e.period}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Stack>

              <Divider sx={{ my: 2, borderColor: 'rgba(100,255,218,0.08)' }} />

              <Stack direction="row" spacing={1} alignItems="flex-start">
                <TranslateIcon sx={{ color: 'primary.main', fontSize: 20, mt: 0.3 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600, mb: 1 }}>{t('about.sidebar.languages')}</Typography>
                  {languages.map((l) => (
                    <Box key={l.language} sx={{ mb: 1 }}>
                      <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{l.language}</Typography>
                        <Typography variant="caption" sx={{ color: 'primary.main' }}>{l.level}</Typography>
                      </Stack>
                      <Box sx={{ height: 4, bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
                        <Box sx={{ height: '100%', width: `${l.percent}%`, bgcolor: 'primary.main', borderRadius: 2 }} />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
