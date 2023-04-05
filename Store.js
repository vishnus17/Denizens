import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import reducer from "./State/reducers";
import FeedListReducer from "./State/FeedListReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rootReducer = combineReducers({
  // reducers
  user: reducer,
  feedList: FeedListReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
