// MainButton.js

import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { rs } from "../theme/responsiveScreen.ts";
import { typography } from "../theme/typography.ts";
import { MainSubLiner } from "./Subliner.tsx";

interface MainOneLiner {
  firstLine: string;
  secondLine: string;
  onPress: () => void;
  style?: TextStyle;
}

export const MainOneLiner = ({
  firstLine,
  secondLine,
  onPress,
  style,
}: MainOneLiner) => {
  return (
    <>
      <Text style={[styles.mainFirstText, style]}>
        {firstLine} <MainSubLiner mainLine={secondLine} onPress={onPress} />
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  mainFirstText: {
    fontSize: rs(12),
    fontFamily: typography.Main,
  },
});
