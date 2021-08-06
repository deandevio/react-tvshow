import { useReducer } from "react";
import ShowsContext from "./showsContext";
import showsReducer from "./showsReducer";
import { SEARCH_SHOWS, SET_LOADING, SET_ALERT, SET_SINGLE_SHOW } from "../types";

const ShowsState = () => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(showsReducer, initialState);
  return (
    <ShowsContext.Provider
      value={{
        shows: state.show,
        singleShow: state.singleShow,
        loading: state.loading,
      }}
    ></ShowsContext.Provider>
  );
};

export default ShowsContext;
