// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Image} from "react-native"
// import React, { useState, useEffect } from "react"
import * as ImagePicker from "expo-image-picker";

// const Post = () => {
//   const [image, setImage] = useState("")
import CheckBox from "expo-checkbox"

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result.uri);

  if (result) {
    setImage(result.uri);
    console.log(result.uri);
  }
};

//   // useEffect(() => {
//   //   console.log(image)
//   // }, [image])
//   return (
//     <View>
//       <Text className="text-2xl mx-5 my-8">Add Post</Text>
//       <View className="h-60  my-5 mx-19 flex flex-col space-y-4 ">
//         <View>
//           <Text className="text-xl mx-10">Write a Caption</Text>
//           <TextInput
//             multiline={true}
//             style={styles.caption}
//             className="w-full  h-20 border border-sky-500 w-64 mx-10 rounded-lg"
//             keyboardType="default"
//           />
//         </View>
//         <View>
//           <Text className="text-xl mx-10">Tag People</Text>
//           <TextInput
//             className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg"
//             keyboardType="default"
//           />
//         </View>
//         <View>
//           <Text className="text-xl mx-10">Add Location</Text>
//           <TextInput
//             className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg"
//             keyboardType="default"
//           />
//         </View>
//         <View>
//           <Text className="text-xl mx-10">Add Photo</Text>
//           <TouchableOpacity onPress={pickImage}>
//             <Text>Upload Image</Text>
//           </TouchableOpacity>
//           {image && (
//             <Image
//               source={{ uri: image }}
//               style={{ width: 200, height: 200, backgroundColor: "orange" }}
//             />
//             // <Text>test</Text>
//           )}
//           {/* <TextInput className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg" keyboardType="default" /> */}
//           <Text className=" w-60 mx-12 my-20 bg-blue-500 font-bold shadow-sm rounded-full p-3 text-white text-lg text-center ">
//             Post
//           </Text>
//         </View>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "red",
//   },
//   caption: {
//     textAlignVertical: "top",
//   },
// })

// export default Post

import React, { useState } from "react";
import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const Post = () => {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri);

    if (result) {
      setPostImage(result.uri);
      console.log(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text className="text-2xl mx-5 my-3">New post</Text>
      </View>

      <TouchableOpacity
        style={styles.postImageContainer}
        onPress={() => {
          pickImage();
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

      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
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
                  checkbox[idx] = newVal;
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
          );
        })}

      {/* <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity> */}
    </View>
  );
};

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
    width: 200,
    marginLeft: 54,
    alignItems: "center",
  },
  postButtonText: {
    color: "#fff",
  },
});

export default Post;
