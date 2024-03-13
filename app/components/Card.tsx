// MainButton.js

import React from "react";
import { StyleSheet, View } from "react-native";
import { rs, wp } from "../theme/responsiveScreen.ts";
import LinearGradient from "react-native-linear-gradient";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <View>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#222222", "#555555"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: wp(90),
    padding: rs(10),
    borderRadius: rs(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
