import React, { useState, useRef } from "react";
import { View, Text, Button, FlatList, Animated } from "react-native";
import OnboardingItem from '../OnboardingItem';
import NextButton from '../NextButton';
import slides from "../../slides";
import Paginator from "../Paginator";


const Onboarding = ({ navigation }) => {
  const onButtonClick = () => {
    navigation.replace("LoginScreen");
  };
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () =>{
    if (currentIndex < slides.length-1){
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    }
    else {
      console.log('Last item.');
    }
  }

  return (
    <View className="h-full bg-white  flex justify-center align-middle">
      <View style={{ flex: 3 }}>
        <FlatList data={slides} renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator = {false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x:scrollX } } }], {
            useNativeDriver: false,
          })}

          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}

        />
        {/* <View
          // className="w-1/2 flex justify-center align-middle"
          style={{ justifyContent: "center" }}
        >
          <Button onPress={onButtonClick} title="Get Started" />
        </View> */}
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1)*(100 /slides.length)} />
    </View>
  );
};

export default Onboarding;
