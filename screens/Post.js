import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native"
import React, { useState, useEffect } from "react"
import * as ImagePicker from "expo-image-picker"

const Post = () => {
  const [image, setImage] = useState("")

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result.uri)

    if (result) {
      setImage(result.uri)
      console.log(result.uri)
    }
  }

  // useEffect(() => {
  //   console.log(image)
  // }, [image])
  return (
    <View>
      <Text className="text-2xl mx-5 my-8">Add Post</Text>
      <View className="h-60  my-5 mx-19 flex flex-col space-y-4 ">
        <View>
          <Text className="text-xl mx-10">Write a Caption</Text>
          <TextInput
            multiline={true}
            style={styles.caption}
            className="w-full  h-20 border border-sky-500 w-64 mx-10 rounded-lg"
            keyboardType="default"
          />
        </View>
        <View>
          <Text className="text-xl mx-10">Tag People</Text>
          <TextInput
            className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg"
            keyboardType="default"
          />
        </View>
        <View>
          <Text className="text-xl mx-10">Add Location</Text>
          <TextInput
            className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg"
            keyboardType="default"
          />
        </View>
        <View>
          <Text className="text-xl mx-10">Add Photo</Text>
          <TouchableOpacity onPress={pickImage}>
            <Text>Upload Image</Text>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, backgroundColor: "orange" }}
            />
            // <Text>test</Text>
          )}
          {/* <TextInput className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg" keyboardType="default" /> */}
          <Text className=" w-60 mx-12 my-20 bg-blue-500 font-bold shadow-sm rounded-full p-3 text-white text-lg text-center ">
            Post
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  caption: {
    textAlignVertical: "top",
  },
})

export default Post
