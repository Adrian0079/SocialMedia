import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {AddAPhoto, Add as AddIcon, EmojiEmotions, Person, PersonAdd, Send, Videocam } from "@mui/icons-material"
import styled from 'styled-components'

const Add = () => {
    const[openModal, setOpenModal] = useState(false)

    const StyledModal = styled(Modal)({
        display:"flex",
        alignItems: "center",
        justifyContent:"center"
    })

    const UserBox = styled(Box)({
        display:"flex",
        alignItems: "center",
        gap:"10px",
        marginBottom:"20px"
    })

  return (

    

    <>
        <Tooltip 
        onClick={e=>setOpenModal(true)} 
        title="Delete" 
        sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        
        
            <StyledModal
            open={openModal}
            onClose={e=>setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={4}>
                    <Typography variant='h6' color="gray" textAlign="center" fontWeight={800}>
                        Do you want to create a new post?
                    </Typography>
                    <UserBox>
                        <Avatar 
                        sx={{width:30, height:30 }} 
                        alt='Rick_Sanchez' src="https://elcomercio.pe/resizer/7oXW_85RLQJKODHTyA6tsEO-wb8=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CIE2IRCYRZC3BGDX5Z2ATL7GMA.png"
                        />    
                        <Typography fontWeight={500} variant='span'>
                            Rick Sanchez
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Write your post..."
                    />
                    <Stack direction="row" gap={1}>
                        <EmojiEmotions/>
                        <Videocam/>
                        <AddAPhoto/>
                        <PersonAdd />
                        <Button variant="contained" endIcon={<Send />}>
                            Post
                        </Button>
                    </Stack>
                </Box>
            </StyledModal>
    </>
  )
}

export default Add
