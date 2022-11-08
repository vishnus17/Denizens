import { Splash } from "../components/Splash";
const SplashScreen = ({ navigation }) => {
  // const [viewedOnboarding, setViewedOnboarding] = useState(null);
  // let route;
  // // useEffect
  // useEffect(() => {
  //   firstTimeViewer();
  // }, []);
  // // to make onboarding screen appear only one time
  // const firstTimeViewer = () => {
  //   try {
  //     AsyncStorage.getItem("@viewedOnboarding").then((value) => {
  //       if (value == null) {
  //         AsyncStorage.setItem("@viewedOnboarding", "true");
  //         setViewedOnboarding(false);
  //       } else {
  //         setViewedOnboarding(true);
  //       }
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // // checking status of viewedOnboarding component
  // if (viewedOnboarding == null) {
  //   return null;
  // } else if (viewedOnboarding == true) {
  //   route = "HomeScreen";
  // } else {
  //   route = "OnboardingScreen";
  // }
  // // Timeout for Splash screeen
  // setTimeout(() => {
  //   navigation.replace(route);
  // }, 2000);
  // return (
  //   <View className="h-full flex justify-center align-middle">
  //     <Text className="text-center">splash</Text>
  //   </View>
  // );
  return <Splash navigation={navigation} />;
};

export default SplashScreen;
