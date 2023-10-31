import { FullscreenExit, Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const StyleToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({theme})=>({
   display:'none',
   gap:"20px",
   alignItems: "center",
   [theme.breakpoints.up("sm")]:{
    display: "flex"
   }


}));

const UserBox = styled(Box)(({theme})=>({
    display:'flex',
    gap:"10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
 }));

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);


  return (
    <AppBar position="sticky">
        <StyleToolbar>
            <Typography variant='h6'sx={{display:{xs: "none", sm: "block"}}}>
                SocialWeb                
            </Typography>
            <Pets sx={{display:{xs:"block", sm:"none"}}}/>

            <Search>
                <InputBase placeholder='Search...'/>
            </Search>

            <Icons>
            <Badge badgeContent={4} color="error">
                <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
                <Notifications />
            </Badge>
                <Avatar 
                sx={{width:30, height:30 }} 
                alt='Rick_Sanchez' src="https://elcomercio.pe/resizer/7oXW_85RLQJKODHTyA6tsEO-wb8=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CIE2IRCYRZC3BGDX5Z2ATL7GMA.png"
                onClick={e=>setOpenMenu(true)}
                />
                
            </Icons>

            <UserBox onClick={e=>setOpenMenu(true)}>
            <Avatar sx={{width:30, height:30 }} alt='Rick_Sanchez' src="https://elcomercio.pe/resizer/7oXW_85RLQJKODHTyA6tsEO-wb8=/1200x1200/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CIE2IRCYRZC3BGDX5Z2ATL7GMA.png" />
            <Typography variant='span'>Rick</Typography>
            </UserBox>


            


        </StyleToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={openMenu}
            onClose={e=>setOpenMenu(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
        </Menu>



    </AppBar>
      
    
      
  )
}

export default Navbar
