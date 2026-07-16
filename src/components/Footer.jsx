import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Stack, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{ py: 5, px: { xs: 3, md: 10 }, borderTop: '1px solid rgba(100,255,218,0.08)', bgcolor: 'background.default' }}
    >
      <Divider sx={{ borderColor: 'rgba(100,255,218,0.06)', mb: 4 }} />
      <Box
        sx={{
          display: 'flex', flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center', justifyContent: 'space-between', gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem' }}
          >
            {t('footer.builtBy')}{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>Pedro Rodolfo Gil Alfaro</Box>
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: 'text.secondary', opacity: 0.5, fontFamily: '"JetBrains Mono", monospace' }}
          >
            © {new Date().getFullYear()} · {t('footer.stack')}
          </Typography>
        </Box>

        <Stack direction="row" spacing={0.5}>
          {[
            { icon: <LinkedInIcon fontSize="small" />, href: personal.linkedin },
            { icon: <GitHubIcon fontSize="small" />, href: personal.github },
            { icon: <EmailIcon fontSize="small" />, href: `mailto:${personal.email}` },
          ].map((btn, i) => (
            <IconButton
              key={i} href={btn.href} size="small"
              target={btn.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}
            >
              {btn.icon}
            </IconButton>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
