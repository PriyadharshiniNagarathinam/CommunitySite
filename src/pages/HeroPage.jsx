import React from 'react'

// Components
import Navbar from '../components/Navbar'
import TypingEffect from '../components/ui/TypingEffect'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'

// Assets
import RoadmapSvg from '../assets/roadmap.svg'
import DiscussSvg from '../assets/discuss.svg'
import ColabSvg from '../assets/colab.svg'
import ColaborationImage from '../assets/colaborationImg.jpg'
import heroImg1 from '../assets/heroImg1.jpg'

// Icons
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  borderRadius: '10px',
  ...theme.typography.body2,
  textAlign: 'center',
}))

function HeroPage() {
  return (
    <div>
      <Navbar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
          padding: '2rem',
          mt:'60px'
        }}
      >
        <Box
          sx={{
            m: 2,
            flex: 1,
            width: { xs: '90%', md: '60%' },
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '3rem', md: '3.5rem' } }}
          >
            Let's{' '}
            <TypingEffect strings={['Code!', 'Collaborate!', 'Contribute!']} />
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, width: { xs: '100%', md: '75%' } }}
          >
            Dive into the Code Playground! Let's build, break, and geek out
            together. Join us for tech talks, coding challenges, and endless
            bytes of fun! 💻✨
          </Typography>
          <Box sx={{ mt: 3, color: 'black' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'inherit',
                borderColor: 'inherit',
                // fontSize: '1.2rem',
                // padding: '0.75rem 1.5rem',
              }}
            >
              Join the Community
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <img
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            src={heroImg1}
            alt="Collaboration Image"
          />
        </Box>
      </Container>
      <Container
        sx={{
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">WHAT WE DO</Typography>
        <Divider
          sx={{
            width: '8%',
            borderTop: '5px solid #000',
            marginTop: '10px',
            marginBottom: '30px',
          }}
        />
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', maxWidth: '600px', marginBottom: '20px' }}
        >
          We, a bunch of new developers, bound by the desire to learn, grow, and
          collaborate, built our community with
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            '@media (max-width: 840px)': {
              flexDirection: 'column',
            },
          }}
        >
          {/* TODO: Make it dynamic */}
          <Card sx={{ maxWidth: 345, flex: 1, m: 3, height: '400px' }}>
            <CardActionArea sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={RoadmapSvg}
                alt="Code Illustration"
                sx={{ mt: 2, width: '100%' }}
              />
              <CardContent sx={{ margin: 2 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={'center'}
                >
                  Guiding Roadmaps
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign={'center'}
                >
                  Navigate the vast world of technologies with our tailored
                  roadmaps. From web development to machine learning, we've got
                  you covered.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, flex: 1, m: 3, height: '400px' }}>
            <CardActionArea sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={ColabSvg}
                alt="Discussion"
                sx={{ mt: 2, width: '100%' }}
              />
              <CardContent sx={{ margin: 2 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={'center'}
                >
                  Collaborative Coding
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign={'center'}
                >
                  Dive into collaborative projects, share your expertise, and
                  learn from fellow developers. The best code is written
                  together.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, flex: 1, m: 3, height: '400px' }}>
            <CardActionArea sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={DiscussSvg}
                alt="Code Illustration"
                sx={{ mt: 2, width: '100%' }}
              />
              <CardContent sx={{ margin: 2 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={'center'}
                >
                  Discussion Forum
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign={'center'}
                >
                  Engage in meaningful conversations in our discussion forum.
                  Ask questions, share your experiences, and be part of a
                  community that's here to support each other.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
      <Container
        sx={{
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '100px',
        }}
      >
        <Typography variant="h4">WHY JOIN US</Typography>
        <Divider
          sx={{
            width: '8%',
            borderTop: '5px solid #000',
            marginTop: '6px',
            marginBottom: '30px',
          }}
        />
        {/* TODO: Change it's content */}
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', maxWidth: '600px', marginBottom: '20px' }}
        >
          We, a bunch of new developers, bound by the desire to learn, grow, and
          collaborate, built our community with
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '@media (max-width: 840px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box sx={{ width: '300px', flex: '1' }}>
            <img
              style={{ maxWidth: '100%', height: 'auto' }}
              src={ColaborationImage}
              alt="Collaboration Image"
            />
          </Box>
          <Stack direction="column" spacing={2} sx={{ flex: '1' }}>
            {/* TODO: Make it dynamic */}
            <DemoPaper square={false}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Learn Together
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                No matter where you are in your coding journey, there's always
                room to learn. Learn alongside fellow developers and benefit
                from diverse perspectives.
              </Typography>
            </DemoPaper>
            <DemoPaper square={false}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Sharpen Your Coding Edge
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Engage in our discussion forums and challenge yourself with
                real-world coding problems. Our diverse community fosters an
                environment where members actively participate in doubt-solving
                and code reviews
              </Typography>
            </DemoPaper>
            <DemoPaper square={false}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Knowledge Hub
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Join our vibrant community where developers of all levels
                collaborate to solve coding challenges, share insights, and
                explore the latest technologies together.
              </Typography>
            </DemoPaper>
          </Stack>
        </Box>
      </Container>
      <Divider />
      <Container
        sx={{
          marginTop: '30px',
          marginBottom: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography>&copy; 2021 CommunitySite. All rights reserved.</Typography>
        <Box>
          {/* TODO: Make it dynamic and add fake links */}
          <InstagramIcon fontSize="large" sx={{ m: 2 }} />
          <FacebookIcon fontSize="large" sx={{ m: 2 }} />
          <LinkedInIcon fontSize="large" sx={{ m: 2 }} />
        </Box>
      </Container>
    </div>
  )
}

export default HeroPage
