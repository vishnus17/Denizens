// import { collection, getDoc } from "firebase/firestore";
// import db from "../firebase";
import { useDispatch } from "react-redux";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  orderBy,
  query,
} from "firebase/firestore";
import db from "../firebase";
import thunk from "redux-thunk";

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

export const LoadFeeds = () => {
  // const dispatch = useDispatch();
  return async (dispatch) => {
    let items = [];
    const q = query(collection(db, "feeds"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    // items.map((item) => {
    //   console.log("feed ", item);
    // });
    let mitems = items.map((feed) => ({
      feed,
    }));
    console.log("feeds", mitems);
    dispatch(LoadFeedsSuccess(mitems));
  };
};

export const LoadFeedsSuccess = (payload) => {
  console.log("payload", payload);
  return {
    type: "feedList",
    payload: payload,
  };
};
