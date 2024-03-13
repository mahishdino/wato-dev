import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  getStarted: undefined;
  signIn: undefined;
  signUp: undefined; // Corrected spelling from "singUp" to "signUp"
};

export type WatoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "getStarted" | "signIn" | "signUp"
>;

export interface GetStartedProps {
  navigation: WatoScreenNavigationProp;
}
