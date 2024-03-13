// MainButton.js

import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { rs, wp } from "../theme/responsiveScreen.ts";
import { typography } from "../theme/typography.ts";

interface MainTextFieldProps {
  onChangeText: (txt: string) => void;
  isPassword: boolean;
  title: string;
  style?: object;
  value?: string;
}

export const MainTextField = ({
  onChangeText,
  isPassword,
  title,
  style = {},
  value,
}: MainTextFieldProps) => {
  return (
    <View style={[styles.container, style]}>
      {isPassword && (
        <Image
          source={require("../assets/images/eye-line.png")}
          style={styles.icon}
        />
      )}
      <TextInput
        secureTextEntry={isPassword}
        placeholderTextColor={"#ffffff66"}
        style={styles.input}
        placeholder={title}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: rs(10),
    width: wp(80),
    height: rs(48),
    paddingLeft: rs(15),
  },
  icon: {
    width: rs(20),
    height: rs(20),
    position: "absolute",
    right: 10,
  },
  input: {
    fontSize: rs(14),
    flex: 1,
    color: "#fff",
    fontFamily: typography.Main,
  },
});
