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
import { useEffect } from 'react'
import { Google, GitHub } from '@mui/icons-material'
import { supabase } from '../constants/client'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const formdata = new FormData(event.currentTarget)
      console.log({
        email: formdata.get('email'),
        password: formdata.get('password'),
      })
      const { data, error } = await supabase.auth.signUp({
        email: formdata.get('email'),
        password: formdata.get('password'),
      })
      if (error) throw error
      else {
        navigate('/user')
      }
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session)
    })
  }, [])

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
        <Typography component="h1" variant="h4">
          Login
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
          sx={{ mt: 2 }}
        >
          Log In with GitHub
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
          Log In with Google
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Or login with email
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
