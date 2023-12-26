import React from 'react'
//mui
import { Card, Avatar, CardActions, CardContent, CardHeader, Typography, Stack, Box, Chip } from '@mui/material'

//mui Icons
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';



const Post = ({ dis }) => {

  return (
    <div>
      <Card sx={{ padding: 2 }}>
        <CardHeader
          title={dis.content.title}
          subheader={dis.created_at}
          sx={{ padding: '0px', }}
        />
        {
          dis.content.tags.map((tag) => (
            <Chip label={tag} sx={{ height: '20px' }} />
          ))
        }

        <CardContent>
          <Typography variant="body2" color="text.secondary" noWrap={true}>
            {dis.content.body}
          </Typography>
        </CardContent>

        <Stack direction='row' justifyContent='space-between'>
          <CardActions sx={{ padding: '0px' }}>
            <Stack direction='row' spacing={3}>

              <ThumbUpOffAltIcon
                style={{
                  fontSize: "20px",
                  cursor: 'pointer',
                }} />{dis.upvotes}
              <ThumbDownOffAltIcon
                style={{
                  fontSize: "20px",
                  cursor: 'pointer',
                }} />{dis.downvotes}
              <ReplyIcon
                style={{
                  fontSize: "20px",
                  cursor: 'pointer',
                }} />{dis.replies}
            </Stack>
          </CardActions>

          <Stack direction='row' spacing={2}>
            <Typography>{dis.views} views</Typography>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <Avatar
                src=""
                sx={{ width: 20, height: 20 }}
              />
              <Typography>{dis.userId}</Typography>
            </Box>
          </Stack>

        </Stack>
      </Card>
    </div>
  )
}

export default Post