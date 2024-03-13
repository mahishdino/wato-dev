import { Image, StyleSheet, Text, View } from "react-native";
import { MainButton } from "../components/MainButton.tsx";
import { rs, wp } from "../theme/responsiveScreen.ts";
import { MainOneLiner } from "../components/OneLiner..tsx";
import { AppText } from "../constant.ts";
import { GetStartedProps } from "../types/types.ts";
import { typography } from "../theme/typography.ts";
import { Colors } from "../theme/color.ts";

export const GetStarted = ({ navigation }: GetStartedProps) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../assets/images/sparkle.png")}
        resizeMode={"contain"}
        style={styles.sparkle}
      />
      <Image
        source={require("../assets/images/godray.png")}
        resizeMode={"contain"}
        style={styles.godray}
      />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerText}>{AppText.wato}</Text>
        <Text style={styles.subHeaderText}>{AppText.zeroWhatsapp}</Text>
      </View>
      <MainButton
        onPress={() => navigation.navigate("signUp")}
        title={"Get Started"}
      />

      <MainOneLiner
        style={styles.mainOnelinerContainer}
        onPress={() => {
          navigation.navigate("signIn");
        }}
        firstLine={AppText.alreadyHaveAnAccount}
        secondLine={AppText.signInInstead}
      />
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
  sparkle: {
    right: 0,
    top: 10,
    width: rs(400),
    height: rs(550),
    position: "absolute",
  },
  godray: {
    right: 0,
    top: 10,
    width: rs(400),
    height: rs(550),
    position: "absolute",
  },
  headerTitleContainer: {
    width: wp(100),
    marginVertical: rs(30),
    marginLeft: rs(30),
  },
  headerText: {
    color: Colors.white,
    fontSize: rs(49),
    fontFamily: typography.MainSan,
  },
  subHeaderText: {
    color: Colors.white,
    marginVertical: rs(30),
    fontSize: rs(26),
    fontFamily: typography.MainGtx,
    width: rs(300),
  },
  mainOnelinerContainer: { marginTop: rs(30) },
});
