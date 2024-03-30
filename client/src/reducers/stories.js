const initialState = []; // Define your initial state here

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_STORIES":
      // Add your logic for FETCH_ALL_STORIES action
      return state; // For now, just return the current state
    case "CREATE_STORY":
      // Add your logic for CREATE_STORY action
      return state; // For now, just return the current state
    default:
      return state;
  }
};

export default storiesReducer;
