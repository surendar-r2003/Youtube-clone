// const currentUserReducer = (state=null,action)=>{
//     switch (action.type){
//         case 'FETCH_CURRENT_USER':
//             return action.payload;
//         default: return state;
//     }
// }
// export default currentUserReducer;
const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_USER":
      return action.payload;
    case "AUTH":
      return action.payload;
    default:
      return state;
  }
};

export default currentUserReducer;