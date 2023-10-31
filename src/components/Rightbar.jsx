import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    
        <Box flex={2} p={2} sx={{display:{xs: "none", sm: "block"}} }>
            <Box position="fixed" width={300}>
                <Typography variant='h5' fontWeight={100}>Online contacts</Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant='h5' fontWeight={100} mt={2} mb={2}>Recently photos</Typography>
                <ImageList cols={3} rowHeight={100}>
                
                    <ImageListItem>
                        <img
                        src="https://www.mexicodestinos.com/blog/wp-content/uploads/2014/09/Relax-557x420.jpg"
                        alt="beach"
                        loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                        src="https://www.viajes-carrefour.com/blog/wp-content/uploads/2017/05/Dubai-Marina-Viaje-a-Dubai-portada.jpg"
                        alt="Dubai"
                        loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem >
                        <img
                        src="https://a.cdn-hotels.com/gdcs/production37/d1139/a8a147d0-c31d-11e8-825c-0242ac110006.jpg"
                        alt="Vegas"
                        loading="lazy"
                        />
                    </ImageListItem>
                    <Typography variant='h5' fontWeight={100} mt={2} >Latest chats</Typography>
                </ImageList>
                
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                            }
                            />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                        to Scott, Alex, Jennifer
                                </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                                }
                                />
                            </ListItem>
                        </List>
            </Box>
        </Box>  
    
  )
}

export default Rightbar
