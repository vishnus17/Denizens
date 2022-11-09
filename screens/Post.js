import { View, Text,TextInput,StyleSheet } from "react-native";
import React from "react";

const Post = () => {
  return (
    <View>
    <Text className="text-2xl mx-5 my-8">Add Post</Text>
    <View className="h-60  my-5 mx-19 flex flex-col space-y-4 ">
  <View>
  <Text className="text-xl mx-10">
  Write a Caption
  </Text>
  <TextInput className="w-full  h-20 border border-sky-500 w-64 mx-10 rounded-lg" keyboardType="default" />
  </View>
  <View>
  <Text className="text-xl mx-10">
  Tag People
  </Text>
  <TextInput className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg" keyboardType="default" />
  </View>
  <View>
  <Text className="text-xl mx-10">
  Add Location
  </Text>
  <TextInput className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg" keyboardType="default" />
  </View>
  <View>
  <Text className="text-xl mx-10">
  Add Music
  </Text>
  <TextInput className="w-full h-10 border border-sky-500 w-64 mx-10 rounded-lg" keyboardType="default" />
  <Text className=" w-60 mx-12 my-20 bg-blue-500 font-bold shadow-sm rounded-full p-3 text-white text-lg text-center ">
            Post
  </Text>
  </View>
  
    </View>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red'
  }
})

export default Post;
