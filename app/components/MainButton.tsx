// MainButton.js

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { rs, wp } from "../theme/responsiveScreen.ts";
import { typography } from "../theme/typography.ts";

interface MainButtonProps {
  title: string;
}

export const MainButton = ({ title }: MainButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.buttonContainer}>
        <LinearGradient
          style={styles.linearGradient}
          colors={["#555555", "#000000"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: rs(10),
    elevation: 5,
  },
  linearGradient: {
    elevation: rs(10),
    zIndex: rs(10),
    width: wp(90),
    height: rs(48),
    borderRadius: rs(10),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  text: {
    color: "#fff",
    fontFamily: typography.MainBold,
    fontSize: rs(16),
  },
});
