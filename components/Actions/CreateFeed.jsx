// import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";
// import { PermissionsAndroid, Platform } from "react-native";
// import { ImagePicker } from "expo-image-multiple-picker";
// import { Button, Card, Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconButton } from "react-native-paper";
import { Button, Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FlatList } from "react-native";
import { ParallaxImage } from "react-native-snap-carousel";
import Carousel from "react-native-snap-carousel";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import db from "../../firebase";
import { useSelector } from "react-redux";
import {
  addDoc,
  serverTimestamp,
  doc,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const CarouselItem = ({ item, index }, parallaxProps) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{ uri: item.uri }} /* the source of the image */
        containerStyle={styles.imageContainer}
        style={styles.image}
        {...parallaxProps} /* pass in the necessary props */
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );
};

const CustomSlider = ({ data }) => {
  const { width } = useWindowDimensions();
  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel {...settings} />
    </View>
  );
};

const CreateFeed = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  const [images, setImages] = useState([]);
  const [caption, setCaption] = useState("");
  const { width } = useWindowDimensions();
  const [changed, setChanged] = useState(false);
  const [loading, setLoading] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      amediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,

      aspect: [4, 3],
      quality: 1,
    });
    console.log("result", result);

    if (!result.cancelled) {
      setImages(result.selected ? result.selected : [result]);
    }
  };

  // uploading images in storage
  const storage = getStorage();

  const uploadPhoto = async (item) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    // const imageRef = ref(
    //   storage,
    //   item.uri.substring(item.uri.lastIndexOf("/") + 1)
    // );
    const filename = item.uri.substring(item.uri.lastIndexOf("/") + 1);
    const imageRef = ref(storage, `feeds/${user?.email}/${filename}`);
    console.log(item.uri);
    const response = await fetch(item.uri);
    const blob = await response.blob();

    return await uploadBytes(imageRef, blob, metadata).then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((url) => {
        return url;
      });
    });
  };

  //on click post
  const onPost = async () => {
    setLoading(true);
    const imagePromises = Array.from(images, (image) => uploadPhoto(image));

    const downloadURLs = await Promise.all(imagePromises);
    console.log("urls", downloadURLs);
    const feedData = {
      caption: caption,
      pictures: downloadURLs,

      likes: 0,
      comments: [],
      userRef: user.email,
      username: user.userInfo.firstname + " " + user.userInfo.lastname,

      timestamp: serverTimestamp(),
    };
    const feedRef = await addDoc(collection(db, "feeds"), feedData);
    const userRef = doc(db, "users", user.email);
    await updateDoc(userRef, { feedRef: arrayUnion(feedRef) }).then(() => {
      alert("posted successfully");
    });
    setImages([]);
    setCaption("");
    setLoading(false);
  };

  useEffect(() => {
    console.log("images", images);
  }, [images]);

  // useEffect(() => {
  //   if (caption != "" || images.length > 0) {
  //     setChanged(true);
  //   } else {
  //     setChanged(false);
  //   }
  // }, [caption, images]);

  return (
    <View className="h-full w-full bg-[#fff] flex flex-col">
      <View className="h-[50] width-full flex flex-row justify-between  items-center bg-[#ddd]">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <IconButton icon="chevron-left" size={28} />
        </TouchableOpacity>

        {loading && <Text>loading</Text>}
        {!loading && (
          <TouchableOpacity
            className="mx-2 px-3 py-1 rounded-md h-3/4 bg-blue-500 flex items-center justify-center"
            onPress={onPost}
          >
            <Text className="text-lg text-white">Post</Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="flex flex-col    align-middle justify-start">
        <View className="flex flex-row align-middle  border-y border-neutral-300  p-2">
          <Ionicons name="logo-closed-captioning" size={28} color="green" />
          <Text className="text-lg ml-2">caption</Text>
        </View>
        <TextInput
          className="w-full px-2 text-base h-1/4"
          placeholder="write your thoughts"
          onChangeText={setCaption}
        ></TextInput>
      </View>
      <View className="flex flex-col border-y border-neutral-300">
        {images.length > 0 && <CustomSlider data={images} />}
        <View className="flex flex-row p-2 align-middle justify-between  ">
          <TouchableOpacity
            onPress={pickImage}
            className="flex flex-row align-middle gap-2"
          >
            <Ionicons name="images" color="green" size={28} />
            <Text className="text-lg">Tap to pick a photo</Text>
          </TouchableOpacity>
          {images.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setImages([]);
              }}
              className="flex align-middle justify-center"
            >
              <Text className="text-base">Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View className="border-b border-neutral-300">
        <TouchableOpacity className="flex flex-row  align-middle gap-2 p-2">
          <Ionicons name="people" size={28} color="green" />

          <Text className="text-lg">Tag People</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateFeed;

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
  },
  title: {
    fontSize: 20,
  },
  item: {
    width: "100%",
    height: 300, //height will be 20 units less than screen width.
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    // marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
  dotContainer: {
    backgroundColor: "rgb(230,0,0)",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
  },
  inactiveDotStyle: {
    backgroundColor: "rgb(255,230,230)",
  },
});
