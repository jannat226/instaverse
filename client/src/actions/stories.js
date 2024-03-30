import * as api from "../api";
export const getStories = () => async (dispatch) => {
  try {
    const action = { type: "FETCH_ALL", payload: [] };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
