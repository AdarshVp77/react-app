import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            align="left"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            EmployeeApp
          </Typography>
          <Button color="inherit">
            <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to={"/form"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Employee Form
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
