import { StyleSheet, Text, View } from "react-native";
import { MainTextField } from "../components/TextField.tsx";
import { AuthButton } from "../components/AuthButton.tsx";
import { Card } from "../components/Card.tsx";
import { rs } from "../theme/responsiveScreen.ts";
import { MainOneLiner } from "../components/OneLiner..tsx";
import { GoogleButton } from "../components/GoogleButton.tsx";
import { MainSubLiner } from "../components/Subliner.tsx";
import { HeaderText } from "../components/HeaderText.tsx";
import { typography } from "../theme/typography.ts";
import { GetStartedProps } from "../types/types.ts";

export const SignIn = ({ navigation }: GetStartedProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerTitleContainer}>
        <HeaderText
          style={{
            fontFamily: typography.MainGtx,
            textAlign: "left",
          }}
          title={"Please sign-in to your account"}
        />
      </View>

      <Card>
        <View style={{ marginVertical: rs(20) }}>
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
        <View style={styles.forgetPasswordContainer}>
          <MainSubLiner
            style={{ textAlign: "right" }}
            mainLine={"Forget Password?"}
            onPress={() => {}}
          />
        </View>
        <AuthButton onPress={() => {}} spaceVertical={rs(20)} title={"Login"} />
        <View style={{ alignItems: "center" }}>
          <MainOneLiner
            firstLine={"New To Our Platform?"}
            secondLine={"Create An Account"}
            onPress={() => {
              navigation.navigate("signUp");
            }}
          />
          <Text style={styles.orTextContainer}>{"or"}</Text>
          <GoogleButton title={"Continue with Google"} spaceVertical={0} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitleContainer: {
    marginVertical: rs(30),
    alignItems: "flex-start",
    width: "90%",
  },
  orTextContainer: { marginVertical: rs(20), textAlign: "center" },
  forgetPasswordContainer: { width: "95%", marginVertical: rs(10) },
});
