import { Button} from "@mui/material";

import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Bird Finder, San Isidro</h1>
      <p>
        This app was made to keep track all the birds seen in the district of
        San Isidro, Buenos Aires, Argentina
      </p>
      <div className="home-btn">
      <Button variant="contained" LinkComponent={NavLink} to={"/birds"}>
        Show every bird find in san isidro so far
      </Button>
      </div>
    </div>
  );
};

export default Home;
