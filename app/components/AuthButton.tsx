// MainButton.js

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { rs, wp } from "../theme/responsiveScreen.ts";
import { Colors } from "../theme/color.ts";

interface AuthButtonProps {
  title: string;
  spaceVertical: number;
  onPress: () => void;
}

export const AuthButton = ({
  title,
  spaceVertical,
  onPress,
}: AuthButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginVertical: spaceVertical,
        width: wp(80),
        backgroundColor: Colors.appButtonBackground,
        justifyContent: "center",
        alignItems: "center",
        padding: rs(10),
        borderRadius: rs(5),
      }}
    >
      <Text style={{ fontSize: rs(14), color: "#000" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
