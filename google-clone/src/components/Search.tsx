import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
type FormEvent = React.ChangeEvent<HTMLInputElement>;

function Search() {
  const [input, setinput] = useState("");

  const search = (e: ButtonEvent) => {
    e.preventDefault();
  };
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e: FormEvent) => setinput(e.target.value)}
        />
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;
