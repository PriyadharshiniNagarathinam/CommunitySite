import React, { useEffect, useState } from 'react'
//mui
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

//component
import Post from './Post'

//supabaseClient
import supabase from '../Supabase/Config';


const StyledButton = styled(Button)({
  backgroundColor: 'white',
  color: 'black',
  "&:hover": {
    backgroundColor: '#9e9e9e',
    color: 'white',

  }
})

const Forum = () => {

  const [discussions, setDiscussions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      const { data, error } = await supabase.from('DiscussionsPosts').select()
      if (error) {
        setError("Something went wrong")
        setPost(null)
        console.log(error)
      }
      if (data) {
        setDiscussions(data)
        setError(null)
        console.log(data, 1)
      }
      else
        console.log("no data")
    }

    fetchData();
  }, [])


  return (


    <div style={{ marginLeft: '100px', padding: '20px', backgroundColor: '#616161' }} >

      <Grid container rowSpacing={2} >

        <Grid item xs={6}>
          <Stack direction="column" justifyContent='space-between' >
            <Typography sx={{ fontSize: '30px', color: 'white' }}>DISCUSSION FORUM</Typography>
            <Typography sx={{ color: 'white' }}><b>345 Discussions</b></Typography>
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <Stack direction="row" spacing={2} justifyContent='flex-end' alignItems='center' sx={{ height: '30px' }}>
            <Typography>Sort By:</Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">Tag</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Tag"
              >
                <MenuItem value={10}>ios</MenuItem>
                <MenuItem value={20}>php</MenuItem>
                <MenuItem value={30}>sql</MenuItem>
              </Select>
            </FormControl>
            <StyledButton sx={{ backgroundColor: 'white' }} endIcon={<AddIcon />}>Post Query</StyledButton>
          </Stack>
        </Grid>

      </Grid>

      {error && (<p>{error}</p>)}
      {discussions && (
        <Stack direction="column" spacing={1}>
          {discussions.map(dis => (
            <Post key={dis.id} dis={dis} />
          ))}
        </Stack>
      )}

    </div>
  )
}

export default Forum