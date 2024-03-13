import { createStackNavigator } from "@react-navigation/stack";
import { GetStarted } from "../screens/getStarted.tsx";
import { SignIn } from "../screens/signIn.tsx";
import { SignUp } from "../screens/signUp.tsx";

const Stack = createStackNavigator();

const StackContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName={"getStarted"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="getStarted" component={GetStarted} />
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackContainer;
