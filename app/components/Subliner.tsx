// MainButton.js

import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { rs } from "../theme/responsiveScreen.ts";
import { typography } from "../theme/typography.ts";
import { Colors } from "../theme/color.ts";

interface MainSubLinerProps {
  mainLine: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>; // Define style prop to accept any TextStyle
}

export const MainSubLiner = ({
  mainLine,
  onPress,
  style,
}: MainSubLinerProps) => {
  return (
    <>
      <Text onPress={onPress} style={[styles.mainSecondText, style]}>
        {mainLine}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  mainSecondText: {
    fontSize: rs(12),
    fontFamily: typography.Main,
    color: Colors.appButtonBackground,
  },
});
