import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Tab, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#606c38" }}>
        <Toolbar>
          <NavLink to={"/"} style={{ color: "white" }}>
            <i class="fa-solid fa-3x fa-kiwi-bird"></i>
          </NavLink>
        
            <Tabs
              sx={{ ml: "auto" }}
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={NavLink} to="/add" label="Add Bird" />
              <Tab LinkComponent={NavLink} to="/birds" label="Birds" />
              <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            </Tabs>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
