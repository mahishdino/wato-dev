import React from "react";
import { Text, View } from "react-native";
import { HeaderText } from "../components/HeaderText.tsx";
import { rs } from "../theme/responsiveScreen.ts";
import { typography } from "../theme/typography.ts";
import { Card } from "../components/Card.tsx";
import { MainTextField } from "../components/TextField.tsx";
import { AuthButton } from "../components/AuthButton.tsx";
import { MainOneLiner } from "../components/OneLiner..tsx";
import { GoogleButton } from "../components/GoogleButton.tsx";
import { GetStartedProps } from "../types/types.ts";
import CheckBox from "react-native-check-box";
import { Colors } from "../theme/color.ts";

export const SignUp = ({ navigation }: GetStartedProps) => {
  const [check, setCheck] = React.useState(false);
  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginVertical: rs(30),
          alignItems: "flex-start",
          width: "90%",
        }}
      >
        <HeaderText
          style={{
            fontFamily: typography.Main,
            textAlign: "left",
          }}
          title={"Please sign-in to your account"}
        />
      </View>
      <Card>
        <View style={{ marginVertical: rs(20) }}>
          <MainTextField
            style={{ marginVertical: 0 }}
            title={"Name"}
            isPassword={false}
            onChangeText={(txt) => {
              console.log(txt);
            }}
          />
          <MainTextField
            style={{ marginVertical: 20 }}
            title={"Email"}
            isPassword={false}
            onChangeText={(txt) => {
              console.log(txt);
            }}
          />
          <MainTextField
            style={{ marginVertical: 0 }}
            title={"Password"}
            isPassword={true}
            onChangeText={(txt) => {
              console.log(txt);
            }}
          />
        </View>
        <View
          style={{
            width: "95%",
            marginVertical: rs(10),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CheckBox
            style={{ borderRadius: rs(10) }}
            checkBoxColor={Colors.appButtonBackground}
            onClick={() => {
              setCheck((prev) => !prev);
            }}
            isChecked={check}
          />
          <MainOneLiner
            style={{ marginLeft: rs(5) }}
            firstLine={"I Agree"}
            secondLine={"Privacy and Policies"}
            onPress={() => {}}
          />
        </View>

        <AuthButton spaceVertical={rs(20)} title={"Login"} />
        <View style={{ alignItems: "center" }}>
          <MainOneLiner
            firstLine={"Have An Account ?"}
            secondLine={"Sign In Instead"}
            onPress={() => {
              navigation.navigate("signIn");
            }}
          />
          <Text style={{ marginVertical: rs(20), textAlign: "center" }}>
            {"Or"}
          </Text>
          <GoogleButton title={"Continue with Google"} spaceVertical={0} />
        </View>
      </Card>
    </View>
  );
};
