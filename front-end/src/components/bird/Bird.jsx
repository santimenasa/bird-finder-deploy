import React from "react";
import { Button } from "@mui/material";
import "./bird.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Bird = (props) => {
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`bird-finder-si-production.up.railway.app/birds/${_id}`)
      .then((res) => res.data)
      .then(() => history('/'))
      .then(() => history("birds"));
  };

  const { _id, species, gender, location, authorName, image } = props.bird;
  return (
    <div className="card">
      <img src={image} alt={species} />
      <h2>{species}</h2>
      <h3>{gender}</h3>
      <p>
        Location: <i>{location}</i>{" "}
      </p>
      <p>
        Picture taked by: <i>{authorName}</i>
      </p>
      <Button LinkComponent={Link} to={`/birds/${_id}`}>
        Update
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  );
};

export default Bird;
