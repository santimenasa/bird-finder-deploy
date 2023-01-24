import React, { useState } from "react";
import { FormLabel, TextField, Box, Button } from "@mui/material";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBird = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    species: "",
    gender: "",
    location: "",
    authorName: "",
    image: ""
  });

  const handleChange = (e) => {
    setInput((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/birds", {
        species: String(input.species),
        gender: String(input.gender),
        location: String(input.location),
        authorName: String(input.authorName),
        image: String(input.image)
      })
      .then((res) => res.data);
  };

  function handleSubmit(e) {
    e.preventDefault();

    sendRequest().then(() => history("/birds"));
  }
  return (
    <div className="add-bird">
      <h2 className="form-title">
        Complete the next form to upload the founded bird
      </h2>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={"100%"}
          alignItems="center"
          marginTop={"4%"}
        >
          <FormLabel>Species</FormLabel>
          <TextField
            value={input.species}
            onChange={handleChange}
            color="info"
            margin="normal"
            variant="outlined"
            name="species"
            sx={{ mb: "2.5%" }}
          />

          <FormLabel>Gender</FormLabel>
          <TextField
            value={input.gender}
            onChange={handleChange}
            color="info"
            margin="normal"
            variant="outlined"
            name="gender"
            sx={{ mb: "2.5%" }}
          />

          <FormLabel>location</FormLabel>
          <TextField
            value={input.location}
            onChange={handleChange}
            color="info"
            margin="normal"
            variant="outlined"
            name="location"
            sx={{ mb: "2.5%" }}
          />

          <FormLabel>Author Name</FormLabel>
          <TextField
            value={input.authorName}
            onChange={handleChange}
            color="info"
            margin="normal"
            variant="outlined"
            name="authorName"
            sx={{ mb: "2.5%" }}
          />
          <FormLabel>Image</FormLabel>
          <TextField
            value={input.image}
            onChange={handleChange}
            color="info"
            margin="normal"
            variant="outlined"
            name="image"
            sx={{ mb: "2.5%" }}
          />
          <Button type="submit" variant="contained" sx={{ mb: "2.5%" }}>
            Add Bird
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBird;


