import { Image, Text, View } from "react-native";
import { MainButton } from "../components/MainButton.tsx";
import { rs, wp } from "../theme/responsiveScreen.ts";
import { MainOneLiner } from "../components/OneLiner..tsx";
import { AppText } from "../constant.ts";
import { GetStartedProps } from "../types/types.ts";

export const GetStarted = ({ navigation }: GetStartedProps) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/sparkle.png")}
        resizeMode={"contain"}
        style={{
          right: 0,
          top: 10,
          width: rs(400),
          height: rs(550),
          position: "absolute",
        }}
      />
      <Image
        source={require("../assets/images/godray.png")}
        resizeMode={"contain"}
        style={{
          right: 0,
          top: 10,
          width: rs(400),
          height: rs(550),
          position: "absolute",
        }}
      />
      <View
        style={{ width: wp(100), marginVertical: rs(30), marginLeft: rs(30) }}
      >
        <Text
          style={{
            fontSize: rs(49),
            fontFamily: "OpenSans-Bold",
          }}
        >
          {AppText.wato}
        </Text>
        <Text
          style={{
            marginVertical: rs(30),
            fontSize: rs(26),
            fontFamily: "OpenSans-Regular",
            width: rs(300),
          }}
        >
          {AppText.zeroWhatsapp}
        </Text>
      </View>
      <MainButton title={"Get Started"} />

      <MainOneLiner
        style={{ marginTop: rs(30) }}
        onPress={() => {
          navigation.navigate("signIn");
        }}
        firstLine={AppText.alreadyHaveAnAccount}
        secondLine={AppText.signInInstead}
      />
    </View>
  );
};
