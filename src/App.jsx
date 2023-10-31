import { Box, Stack, ThemeProvider, createMuiTheme, createTheme } from "@mui/material";
import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Add from "./components/Add";

function App() {

  const [modeC, setModeC] =useState("light")

  const darkMode = createTheme ({
    palette:{
      mode:modeC
    }
  })

  return (

      <ThemeProvider theme={darkMode}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar/>
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}> 
            <Sidebar setMode={setModeC} mode={modeC}/>
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
  );
}

export default App;
