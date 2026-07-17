import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

function SkillItem({ item }) {
  const [imgFailed, setImgFailed] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const imgFilter = isDark
    ? 'brightness(0) invert(1) opacity(0.85)'
    : 'brightness(0) opacity(0.6)';

  let icon;
  if (item.iconUrl && !imgFailed) {
    icon = (
      <img
        src={item.iconUrl}
        alt={item.name}
        width={20}
        height={20}
        style={{ flexShrink: 0, objectFit: 'contain', filter: imgFilter }}
        onError={() => setImgFailed(true)}
      />
    );
  } else if (item.icon) {
    icon = <i className={item.icon} style={{ fontSize: 20, flexShrink: 0 }} />;
  } else {
    icon = <Box sx={{ width: 20, flexShrink: 0 }} />;
  }

  return (
    <Box
      sx={{
        display: 'flex', alignItems: 'center', gap: 1,
        py: 0.8, px: 1, borderRadius: 2, cursor: 'default',
        overflow: 'hidden',
        '&:hover': { bgcolor: 'rgba(100,255,218,0.05)' },
        transition: 'bg 0.2s',
      }}
    >
      {icon}
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary', fontSize: '0.78rem',
          whiteSpace: 'nowrap', overflow: 'hidden',
          textOverflow: 'ellipsis', minWidth: 0,
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
}

function SkillCard({ skill, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid rgba(100,255,218,0.1)',
        borderRadius: 3, p: 3, height: '100%',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.5s ease ${delay}ms`,
        '&:hover': {
          borderColor: 'rgba(100,255,218,0.35)',
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 30px rgba(100,255,218,0.07)',
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: 'primary.main', mb: 2.5, fontSize: '0.95rem', fontFamily: '"JetBrains Mono", monospace' }}
      >
        {skill.category}
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}>
        {skill.items.map((item) => (
          <SkillItem key={item.name} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box id="skills" sx={{ py: { xs: 10, md: 14 }, px: { xs: 3, md: 10 }, bgcolor: 'rgba(255,255,255,0.01)' }}>
      <Container maxWidth="lg">
        <Box
          ref={ref}
          sx={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease',
          }}
        >
          <Typography variant="body2" sx={{ color: 'primary.main', fontFamily: '"JetBrains Mono", monospace', mb: 1 }}>
            {t('skills.sectionLabel')}
          </Typography>
          <Typography variant="h3" sx={{ color: 'text.primary', mb: 1 }}>{t('skills.title')}</Typography>
          <Box sx={{ width: 60, height: 3, bgcolor: 'primary.main', borderRadius: 2, mb: 6 }} />
        </Box>

        <Grid container spacing={3}>
          {skills.map((skill, i) => (
            <Grid item xs={12} sm={6} md={4} key={skill.category}>
              <SkillCard skill={skill} delay={i * 100} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
