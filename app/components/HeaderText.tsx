// MainButton.js

import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { rs } from "../theme/responsiveScreen.ts";
import { typography } from "../theme/typography.ts";

interface HeaderTextProps {
  title: string;
  style?: TextStyle;
}

export const HeaderText = ({ title, style }: HeaderTextProps) => {
  return (
    <>
      <Text style={[styles.mainFirstText, style]}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  mainFirstText: {
    fontSize: rs(18),
    fontFamily: typography.Main,
    marginTop: rs(30),
    lineHeight: rs(30),
    color: "#fff",
  },
});
