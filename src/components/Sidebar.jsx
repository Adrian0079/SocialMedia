import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { AssignmentInd, ConnectWithoutContact, DarkMode, Home, Inbox, LocalGroceryStore, Pages } from '@mui/icons-material'



const Sidebar = ({mode, setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs: "none", sm: "block"}} }>
        <Box position="fixed">

        
    
            <List>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding/>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <LocalGroceryStore />
                        </ListItemIcon>
                        <ListItemText primary="Store" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding/>

                <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                                <Pages />
                        </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                <ListItem disablePadding/>

                <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                                <AssignmentInd />
                        </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                <ListItem disablePadding/>

                <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                                <ConnectWithoutContact />
                        </ListItemIcon>
                            <ListItemText primary="Contacts" />
                        </ListItemButton>
                    </ListItem>
                <ListItem disablePadding/>

                <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                                <DarkMode />
                        </ListItemIcon>
                            <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
                        </ListItemButton>
                    </ListItem>
                <ListItem disablePadding/>


            </List>
        </Box>
    </Box> 
  )
}

export default Sidebar
