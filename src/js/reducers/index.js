const initialState = {
  listData: [],
  detailData:[],
  postId:7
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_LOADED": {
      return Object.assign({}, state, {
        listData: state.listData.concat(action.payload)
      });
    }
    case "LOADED_DATA_DETAIL": {
      return Object.assign({}, state, {
        detailData: state.detailData.concat(action.payload),
        postId: action.postId,
      });
    }
  }
  return state;
}
export default rootReducer;
