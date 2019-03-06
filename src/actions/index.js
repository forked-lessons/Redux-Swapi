import axios from "axios";

export const FETCH_PEOPLE_START = "FETCH_PEOPLE_START";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE";

// our action creator will be a function that returns a function
export const fetchPeople = () => dispatch => {
  dispatch({ type: FETCH_PEOPLE_START });
  axios
    .get("https://swapi.co/api/people/")
    .then(({ data }) => {
      dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: data.results });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PEOPLE_FAILURE,
        payload: err
      });
    });
};
