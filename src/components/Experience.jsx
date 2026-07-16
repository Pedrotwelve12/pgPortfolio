import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box, Container, Typography, Tabs, Tab, Chip, Stack,
  List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const job = experience[selected];

  return (
    <Box
      id="experience"
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
          {t('experience.sectionLabel')}
        </Typography>
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 1 }}>{t('experience.title')}</Typography>
        <Box sx={{ width: 60, height: 3, bgcolor: 'primary.main', borderRadius: 2, mb: 6 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Tabs
            orientation="vertical"
            value={selected}
            onChange={(_, v) => setSelected(v)}
            sx={{
              minWidth: { md: 220 },
              '& .MuiTabs-indicator': { bgcolor: 'primary.main', left: 0, width: 2 },
              '& .MuiTab-root': {
                alignItems: 'flex-start', textAlign: 'left', textTransform: 'none',
                color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem',
                px: 3, py: 1.5, minHeight: 48,
                borderLeft: '1px solid rgba(100,255,218,0.12)',
                '&.Mui-selected': { color: 'primary.main' },
                '&:hover': { color: 'primary.main', bgcolor: 'rgba(100,255,218,0.04)' },
                transition: 'all 0.2s',
              },
            }}
          >
            {experience.map((e) => (
              <Tab key={e.id} label={e.company} />
            ))}
          </Tabs>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ color: 'text.primary', fontWeight: 700, mb: 0.5 }}>
              {t(`experience.jobs.${job.id}.role`)}
              <Box component="span" sx={{ color: 'primary.main' }}>{' @ '}</Box>
              {job.company}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace', mb: 1, fontSize: '0.85rem' }}
            >
              {job.period} · {t(job.type === 'Full-time' ? 'experience.types.fullTime' : 'experience.types.internship')}
            </Typography>

            <List dense sx={{ mb: 2 }}>
              {(t(`experience.jobs.${job.id}.highlights`, { returnObjects: true })).map((h, i) => (
                <ListItem key={i} sx={{ pl: 0, alignItems: 'flex-start', py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 0.3 }}>
                    <ArrowRightIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={h}
                    primaryTypographyProps={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7 }}
                  />
                </ListItem>
              ))}
            </List>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {job.tech.map((tech) => (
                <Chip
                  key={tech} label={tech} size="small"
                  sx={{
                    bgcolor: 'rgba(100,255,218,0.08)', color: 'primary.main',
                    border: '1px solid rgba(100,255,218,0.2)',
                    fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
