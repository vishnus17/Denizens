import * as ImagePicker from "expo-image-picker"
import CheckBox from "expo-checkbox"

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
import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native"

const Post = () => {
  const [postText, setPostText] = useState("")
  const [postImage, setPostImage] = useState(null)
  const [checkbox, setCheckbox] = useState([false, false, false])
  const [isVisible, setIsVisible] = useState(false)

  const viewOptions = ["All", "Followers", "Tagged"]

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
      setPostImage(result.uri)
      console.log(result.uri)
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "space-between",
        }}
      >
        <View>
          <Text className="text-2xl mx-5 my-3">New post</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.postButton,
            { maxHeight: 40, marginRight: 60, maxWidth: 130 },
          ]}
        >
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.postImageContainer}
        onPress={() => {
          pickImage()
        }}
      >
        {postImage ? (
          <Image source={{ uri: postImage }} style={styles.postImage} />
        ) : (
          <Text style={styles.postImagePlaceholder}>Add a photo</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.postTextInput}
        placeholder="Write something..."
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />

      <TextInput
        style={styles.postTextInput}
        placeholder="Tag People"
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />

      <TextInput
        style={styles.postTextInput}
        placeholder="Add Location"
        value={postText}
        onChangeText={(text) => setPostText(text)}
      />
      <TouchableOpacity
        style={styles.postButton}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={styles.postButtonText}>Share to</Text>
      </TouchableOpacity>
      {isVisible &&
        viewOptions.map((view, idx) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "space-between",
                padding: 10,
              }}
            >
              <CheckBox
                value={checkbox[idx]}
                onValueChange={(newVal) => {
                  checkbox[idx] = newVal
                }}
              />
              <Text
                style={{
                  // alignContent: "space-around",
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  padding: 4,
                }}
              >
                {view}
              </Text>
            </View>
          )
        })}

      {/* <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postTextInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  postImageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  postImagePlaceholder: {
    color: "#333",
  },
  postButton: {
    backgroundColor: "#0095f6",
    padding: 10,
    borderRadius: 20,
    width: 200,
    marginLeft: 54,
    alignItems: "center",
  },
  postButtonText: {
    color: "#fff",
  },
})

export default Post
