const initialState = {
  feedList: [],
};

export default FeedListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "store":
      return {
        ...state,
        feedList: action.payload,
      };
    case "feedList":
      return {
        ...state,
        feedList: action.payload,
      };
    default:
      return state;
  }
};
