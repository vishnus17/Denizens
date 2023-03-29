import Routes from "./Routes";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./BottomTabNav";

const AppProvider = () => {
  return (
    <NavigationContainer>
      <Routes />
      {/* <BottomTabNav /> */}
    </NavigationContainer>
  );
};

export default AppProvider;
// import Routes from "./Routes";

// const AppProvider = () => {
//   return <Routes />;
// };

// export default AppProvider;
