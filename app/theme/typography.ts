import { Platform } from "react-native";

/**
 * Just the font names.
 *
 * The various styles of fonts are defined in the <Text /> component.
 */

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({
    ios: "BarlowSemiCondensed-Regular",
    android: "BarlowSemiCondensed-Regular",
  }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: "Lato-Regular", android: "Lato-Regular" }),

  Main: Platform.select({
    ios: "Inter-Regular",
    android: "Inter-Regular",
  }),
  MainSan: Platform.select({
    ios: "SequelSansBoldDisp",
    android: "SequelSansBoldDisp",
  }),

  MainBold: Platform.select({
    ios: "Inter-Bold",
    android: "Inter-Bold",
  }),
  MainLight: Platform.select({
    ios: "Inter-ExtraLight",
    android: "Inter-ExtraLight",
  }),
  MainGtx: Platform.select({
    ios: "GTSuperRegular",
    android: "GTSuperRegular",
  }),
};
