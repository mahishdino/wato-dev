import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
import { fields } from "../constantData/fieldsData.ts";
import { FormData, handleTextChange } from "../functions/signUpUtils.ts";

export const SignUp = ({ navigation }: GetStartedProps) => {
  const [check, setCheck] = React.useState(false);

  const [formData, setFormData] = React.useState<FormData>({
    Name: "",
    Email: "",
    Password: "",
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerTitleContainer}>
        <HeaderText
          style={styles.headerText}
          title={"Please sign-up for your account"}
        />
      </View>
      <Card>
        <View style={{ marginVertical: rs(20) }}>
          {fields.map((field, index) => (
            <MainTextField
              key={index}
              style={{
                marginVertical: index === 1 ? 20 : 0,
              }}
              title={field.title}
              isPassword={field.isPassword}
              onChangeText={(text) =>
                handleTextChange(text, field.title, setFormData)
              }
            />
          ))}
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

        <AuthButton
          onPress={() => {
            console.log(formData);
          }}
          spaceVertical={rs(20)}
          title={"Sign Up"}
        />
        <View style={{ alignItems: "center" }}>
          <MainOneLiner
            firstLine={"Have An Account ?"}
            secondLine={"Sign In Instead"}
            onPress={() => {
              navigation.navigate("signIn");
            }}
          />
          <Text style={{ marginVertical: rs(20), textAlign: "center" }}>
            {"or"}
          </Text>
          <GoogleButton title={"Continue with Google"} spaceVertical={0} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitleContainer: {
    marginVertical: rs(30),
    alignItems: "flex-start",
    width: "90%",
  },
  headerText: {
    fontFamily: typography.MainGtx,
    textAlign: "left",
  },
});
