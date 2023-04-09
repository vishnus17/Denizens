// import { collection, getDoc } from "firebase/firestore";
// import db from "../firebase";
import { useDispatch } from "react-redux";
import { getDoc, doc } from "firebase/firestore";
import db from "../firebase";

// export const LoginRequest = (payload) => {
//   const dispatch = useDispatch();
//   return (dispatch) => {
//     console.log("..............................got it .......................");
//     let userQuery = collection(db, "users", payload.token);

//     let user = getDoc(userQuery);

//     console.log(".....................user...................", user.data());

//     const currenState = {
//       user: {
//         ...payload,
//         userInfo: user,
//       },
//     };
//     dispatch(LoginSuccess(currenState));
//   };
// };

export const LoginSuccess = (payload) => {
  return {
    type: "AUTHENTICATION",
    payload: payload,
  };
};

export const Logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const StoreFeeds = (payload) => {
  return {
    type: "store",
    payload: payload,
  };
};

export const ProfileEdit = (payload) => {
  return {
    type: "",
    payload: payload,
  };
};

export const RefreshState = async () => {
  return {
    type: "AUTHENTICATION",
    payload: currenState,
  };
};
