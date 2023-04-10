import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import Header from "../Header";
import { posts as feeds } from "./Dummy/data";
import { ScrollView } from "react-native-gesture-handler";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { LoadFeeds } from "../../State/actions";

const Home = () => {
  const dispatch = useDispatch();
  const feedList = useSelector((state) => state.feedList.feedList);
  console.log("feedList", feedList);
  const [posts, setPosts] = useState(feedList);
  const [loading, setLoading] = useState(false);

  // console.log(state);
  // const users = collection(db, "users");
  // console.log(users);
  // const querySnapshot = getDocs(users);
  // console.log(querySnapshot);
  // querySnapshot.then((snapshot) => {
  //   console.log("i", snapshot.docs[0].data());
  // });
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
  const fetchFeeds = async () => {
    setLoading(true);
    // let items = [];
    // const querySnapshot = await getDocs(collection(db, "feeds"));
    // items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    // // items.map((item) => {
    // //   console.log("feed ", item);
    // // });
    // let mitems = items.map((feed) => ({
    //   feed,
    // }));
    await dispatch(LoadFeeds());
    setPosts(feedList);

    setLoading(false);
  };
  useEffect(() => {
    if (feedList.length == 0) {
      console.log("zero");
      fetchFeeds();
    }
  }, []);

  // console.log("posts", posts);

  // console.log("items", items);

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark" />
      <Header />
      <ScrollView
        pinchGestureEnabled={false}
        showsVerticalScrollIndicator={false}
      >
        {feedList?.map(({ feed }) => (
          <Feed key={feed.id} {...{ feed }} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
