import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, Stack, IconButton, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid rgba(100,255,218,0.1)',
        borderRadius: 3,
        p: { xs: 3, md: 3.5 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border-color 0.25s, box-shadow 0.25s`,
        '&::before': {
          content: '""',
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(100,255,218,0.5), transparent)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        },
        '&:hover': {
          borderColor: 'rgba(100,255,218,0.38)',
          transform: 'translateY(-6px)',
          boxShadow: '0 20px 48px rgba(100,255,218,0.07)',
        },
        '&:hover::before': {
          opacity: 1,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
        <FolderSpecialOutlinedIcon sx={{ color: 'primary.main', fontSize: 38 }} />
        <Stack direction="row" spacing={0.5}>
          {project.github && (
            <IconButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              aria-label={`View ${project.title} on GitHub`}
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.2s',
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
          {project.demo && (
            <IconButton
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              aria-label={`View ${project.title} live demo`}
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.2s',
              }}
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          )}
        </Stack>
      </Box>

      <Chip
        label={project.category}
        size="small"
        sx={{
          alignSelf: 'flex-start', mb: 1.5,
          bgcolor: 'rgba(100,255,218,0.06)',
          color: 'primary.main',
          border: '1px solid rgba(100,255,218,0.18)',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.68rem',
          height: 22,
        }}
      />

      <Typography
        variant="h6"
        sx={{ color: 'text.primary', fontWeight: 700, mb: 1.5, fontSize: '1.05rem', lineHeight: 1.4 }}
      >
        {project.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8, flex: 1, fontSize: '0.9rem' }}
      >
        {project.description}
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 'auto' }}>
        {project.tech.map((tech) => (
          <Typography
            key={tech}
            variant="caption"
            sx={{
              color: 'primary.main',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.72rem',
              opacity: 0.8,
            }}
          >
            {tech}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 10 },
        bgcolor: 'rgba(255,255,255,0.01)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          ref={ref}
          sx={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease',
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'primary.main', fontFamily: '"JetBrains Mono", monospace', mb: 1 }}
          >
            {t('projects.sectionLabel')}
          </Typography>
          <Typography variant="h3" sx={{ color: 'text.primary', mb: 1 }}>
            {t('projects.title')}
          </Typography>
          <Box sx={{ width: 60, height: 3, bgcolor: 'primary.main', borderRadius: 2, mb: 6 }} />
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} delay={i * 120} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
