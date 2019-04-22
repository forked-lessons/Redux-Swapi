import {
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_START,
  FETCH_PEOPLE_SUCCESS
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_START:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        characters: [...action.payload, ...state.characters]
      };
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
