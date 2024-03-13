import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { rs, wp } from "../theme/responsiveScreen.ts";
import { typography } from "../theme/typography.ts";

interface MainButtonProps {
  title: string;
  onPress: () => void;
}

export const MainButton = ({ title, onPress }: MainButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.shadowContainer}>
        <View style={styles.buttonContainer}>
          <LinearGradient
            style={styles.linearGradient}
            colors={["#2E2F30", "#141517"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 0.3, y: 1 }}
          >
            <Text style={styles.text}>{title}</Text>
          </LinearGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    borderRadius: rs(10),
    shadowColor: "#000", // Shadow properties for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    borderRadius: rs(10),
  },
  linearGradient: {
    elevation: 10,
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
