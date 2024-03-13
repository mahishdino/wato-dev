// MainButton.js

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { rs, wp } from "../theme/responsiveScreen.ts";

interface GoogleButtonProps {
  title: string;
  spaceVertical: number;
}

export const GoogleButton = ({ title, spaceVertical }: GoogleButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        marginVertical: spaceVertical,
        width: wp(80),
        backgroundColor: "#333131",
        borderWidth: 1,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: rs(10),
        borderRadius: rs(5),
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: rs(20), height: rs(20) }}
        source={require("../assets/images/google.png")}
      />
      <Text style={{ fontSize: rs(14), color: "#fff" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
