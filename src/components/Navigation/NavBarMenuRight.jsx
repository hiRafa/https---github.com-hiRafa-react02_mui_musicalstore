import React, { useContext, useState } from "react";
import GlobalContexts from "../context/global-contexts";

import {
  Box,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ButtonSignup from "../Buttons/ButtonSignup";
import ButtonSignin from "../Buttons/ButtonSignin";

const NavBarMenuRight = () => {
  const { navMenuRightOpen, setNavMenuRightOpen, isLoggedin, setIsLoggedin } =
    useContext(GlobalContexts);
  // Profile state

  return (
    <Menu
      id="account-menu"
      open={navMenuRightOpen}
      onClose={(e) => setNavMenuRightOpen(false)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          bgcolor: "black",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      {isLoggedin ? (
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      ) : (
        <Box>
          <MenuItem>
            <ButtonSignup sx={{ bgcolor: "black" }} />
          </MenuItem>
          <MenuItem>
            <NavLink to="/signup">
              <ButtonSignin sx={{ bgcolor: "black" }} />
            </NavLink>
          </MenuItem>
        </Box>
      )}
    </Menu>
  );
};

export default NavBarMenuRight;
