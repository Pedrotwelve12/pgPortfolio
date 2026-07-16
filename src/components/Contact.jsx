import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box, Container, Grid, Typography, TextField,
  Button, Alert, Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useInView } from 'react-intersection-observer';
import { personal } from '../data/portfolioData';

const sanitize = (str) => str.replace(/[<>]/g, '').trim();

const FIELD_SX = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'rgba(255,255,255,0.03)',
    '& fieldset': { borderColor: 'rgba(100,255,218,0.2)' },
    '&:hover fieldset': { borderColor: 'rgba(100,255,218,0.45)' },
    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
  },
  '& .MuiInputLabel-root': { color: 'text.secondary' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' },
  '& .MuiOutlinedInput-input': { color: 'text.primary' },
};

export default function Contact() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const clean = {
      name: sanitize(form.name),
      email: sanitize(form.email),
      message: sanitize(form.message),
    };

    if (!clean.name || !clean.email || !clean.message) {
      setStatus({ type: 'error', msg: t('contact.alerts.allRequired') });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
      setStatus({ type: 'error', msg: t('contact.alerts.invalidEmail') });
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${clean.name}`);
    const body = encodeURIComponent(`Name: ${clean.name}\nEmail: ${clean.email}\n\n${clean.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus({ type: 'success', msg: t('contact.alerts.openingClient') });
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 10 },
        bgcolor: 'rgba(255,255,255,0.01)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.7s ease',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ color: 'primary.main', fontFamily: '"JetBrains Mono", monospace', mb: 1 }}>
          {t('contact.sectionLabel')}
        </Typography>
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 1 }}>{t('contact.title')}</Typography>
        <Box sx={{ width: 60, height: 3, bgcolor: 'primary.main', borderRadius: 2, mb: 6 }} />

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.05rem' }}>
              {t('contact.intro')}
            </Typography>

            <Stack spacing={3}>
              {[
                { icon: <EmailIcon sx={{ color: 'primary.main', fontSize: 20 }} />, label: t('contact.email'), value: personal.email, href: `mailto:${personal.email}` },
                { icon: <LinkedInIcon sx={{ color: 'primary.main', fontSize: 20 }} />, label: t('contact.linkedin'), value: 'pedrogildev', href: personal.linkedin },
                { icon: <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20 }} />, label: t('contact.location'), value: personal.location, href: null },
              ].map((item) => (
                <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 44, height: 44, borderRadius: 2,
                      bgcolor: 'rgba(100,255,218,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>{item.label}</Typography>
                    {item.href ? (
                      <Typography
                        component="a" href={item.href}
                        target={item.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        variant="body2"
                        sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                      >
                        {item.value}
                      </Typography>
                    ) : (
                      <Typography variant="body2" sx={{ color: 'text.primary' }}>{item.value}</Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid rgba(100,255,218,0.1)',
                borderRadius: 3,
                p: { xs: 3, md: 4 },
              }}
            >
              {status && (
                <Alert severity={status.type} sx={{ mb: 3 }} onClose={() => setStatus(null)}>
                  {status.msg}
                </Alert>
              )}
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField label={t('contact.form.name')} name="name" value={form.name} onChange={handleChange}
                    required fullWidth inputProps={{ maxLength: 80 }} sx={FIELD_SX} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label={t('contact.form.email')} name="email" type="email" value={form.email} onChange={handleChange}
                    required fullWidth inputProps={{ maxLength: 120 }} sx={FIELD_SX} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label={t('contact.form.message')} name="message" value={form.message} onChange={handleChange}
                    required fullWidth multiline rows={5} inputProps={{ maxLength: 2000 }} sx={FIELD_SX} />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit" variant="contained" size="large" fullWidth
                    endIcon={<SendIcon />}
                    sx={{
                      bgcolor: 'primary.main', color: 'background.default',
                      fontWeight: 700, py: 1.5, fontSize: '1rem',
                      '&:hover': { bgcolor: 'rgba(100,255,218,0.85)' },
                    }}
                  >
                    {t('contact.form.send')}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
