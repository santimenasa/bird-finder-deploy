import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FormLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import "./bird.css"

const BirdDetail = () => {
  const history = useNavigate();
  const [input, setInput] = useState({});
  const id = useParams().bid;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://bird-finder-si-production.up.railway.app/birds/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.bird));
    };
    fetchHandler();
  }, []);

  const sendRequest = async () => {
    await axios
      .put(`https://bird-finder-si-production.up.railway.app/birds/${id}`, {
        species: String(input.species),
        gender: String(input.gender),
        location: String(input.location),
        authorName: String(input.authorName),
        image: String(input.image)
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/birds"));
  };

  const handleChange = (e) => {
    setInput((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bird-detail">
      <h2>Update info</h2>
      {input && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            maxWidth={"100%"}
            alignItems="center"
            marginTop={"5%"}
          >
            <FormLabel>Species</FormLabel>
            <TextField
              InputProps={{
                inputProps: {
                  style: { textAlign: "center" }
                }
              }}
              value={input.species}
              onChange={handleChange}
              color="info"
              margin="normal"
              fullWidth
              variant="outlined"
              name="species"
              label="species"
              sx={{ mb: "3%" }}
            />

            <FormLabel>Gender</FormLabel>
            <TextField
              InputProps={{
                inputProps: {
                  style: { textAlign: "center" }
                }
              }}
              value={input.gender}
              onChange={handleChange}
              color="info"
              margin="normal"
              fullWidth
              variant="outlined"
              name="gender"
              label="Gender"
              sx={{ mb: "3%" }}
            />

            <FormLabel>location</FormLabel>
            <TextField
              InputProps={{
                inputProps: {
                  style: { textAlign: "center" }
                }
              }}
              value={input.location}
              onChange={handleChange}
              color="info"
              margin="normal"
              fullWidth
              variant="outlined"
              name="location"
              label="location"
              sx={{ mb: "3%" }}
            />

            <FormLabel>Author Name</FormLabel>
            <TextField
              InputProps={{
                inputProps: {
                  style: { textAlign: "center" }
                }
              }}
              value={input.authorName}
              onChange={handleChange}
              color="info"
              margin="normal"
              fullWidth
              variant="outlined"
              name="authorName"
              label="Author Name"
              sx={{ mb: "3%" }}
            />
            <FormLabel>Image</FormLabel>
            <TextField
              InputProps={{
                inputProps: {
                  style: { textAlign: "center" }
                }
              }}
              value={input.image}
              onChange={handleChange}
              color="info"
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
              label=" Image url"
              sx={{ mb: "3%" }}
            />
            <Button type="submit" variant="contained" fullWidth>
              Update Bird
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BirdDetail;
