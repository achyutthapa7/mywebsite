import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink as Link } from "react-router-hash-link";

import IconButton from "@mui/material/IconButton";
import { BrowserRouter } from "react-router-dom";
import { Typography } from "@mui/material";

const Hammenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <BrowserRouter>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon
              sx={{
                display: { xs: "flex", md: "none" },
                fontSize: "40px",
                cursor: "pointer",
                color: "white",
              }}
            />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Link smooth to="#Home" className="Link">
              <Typography variant="h6" color="black">
                HOME
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link smooth to="#About" className="Link">
              <Typography variant="h6" color="black">
                ABOUT
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link smooth to="#Work" className="Link">
              <Typography variant="h6" color="black">
                WORK
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link smooth to="#Contact" className="Link">
              <Typography variant="h6" color="black">
                CONTACT
              </Typography>
            </Link>
          </MenuItem>
        </Menu>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default Hammenu;
