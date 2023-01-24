import axios from "axios";
import React from "react";
import Bird from "./Bird";
import "./bird.css";
import { useEffect, useState } from "react";
const URL = "http://localhost:5000/birds";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Birds = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [birds, setBirds] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBirds(data.birds));
  }, []);
  console.log(birds);

  return (
    <div className="birds">
      <span className="input-span">
        <input
          className="input"
          type={"text"}
          placeholder={`Search Bird`}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </span>
      <ul>
        {birds &&
          birds
            .filter((val) => {
              if (!searchTerm) {
                return val;
              } else if (
                val.species
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((bird, i) => (
              <li key={i}>
                <Bird bird={bird} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Birds;

