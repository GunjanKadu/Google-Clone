import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
type FormEvent = React.ChangeEvent<HTMLInputElement>;

interface searchProps {
  hideButtons?: boolean;
}

function Search(prop: searchProps) {
  const [input, setinput] = useState("");
  const history = useHistory();
  const [{ term }, dispatch] = useStateValue();

  const search = (e: ButtonEvent) => {
    e.preventDefault();
    history.push("/search");
    dispatch({ type: actionTypes.SET_SEARCH_TERM, term: input });
  };
  const getInput = () => {
    if (term) {
      return term;
    } else {
      return input;
    }
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={getInput()}
          onChange={(e: FormEvent) => setinput(e.target.value)}
        />
        <MicIcon />
      </div>
      {!prop.hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search__buttonsHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
