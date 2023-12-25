import React from 'react'
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Container,
  CssBaseline,
  Box,
  Link,
  Divider,
} from '@mui/material'
import { supabase } from '../constants/client'
import { GitHub, Google } from '@mui/icons-material'

const Register = () => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const formdata = new FormData(event.currentTarget)
      console.log({
        email: formdata.get('email'),
        password: formdata.get('password'),
      })
      const { data, error } = await supabase.auth.signUp(
        {
          email: formdata.get('email'),
          password: formdata.get('password'),
        },
        'http://localhost:3000/user'
      )
      if (error) throw error
      alert('Confirm your mail')
    } catch (error) {
      alert(error)
    }
  }

  async function loginWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/user',
      },
    })
  }
  async function loginWithGoogle() {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/user',
      },
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <Divider
          sx={{
            width: '15%',
            borderTop: '5px solid #000',
            marginTop: '10px',
            marginBottom: '30px',
          }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<GitHub />}
          onClick={loginWithGithub}
          sx={{ mt: 1 }}
        >
          Register with GitHub
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          or
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Google />}
          onClick={loginWithGoogle}
          sx={{ mt: 2 }}
        >
          Register with Google
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Or register with email
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I have read and accept the Terms of Service & Privacy Policy"
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
export default Register
