import { Dimensions } from "react-native"
// import { useFonts, Signika_300Light, Signika_400Regular, Signika_500Medium, Signika_600SemiBold, Signika_700Bold } from "@expo-google-fonts/signika"
//Isso e so para tela carregar as fontes ou seja e para as 
const { width, height } = Dimensions.get("window")

export const colors = {
    orange: "#FF7D2B",
    blue: "#216FFA",
    red: "#FF5733",
    green: "#0BA21A",
    purple: "#B500FF",
    white: "#FFFFFF",
    gray: "#F0F5FA",
    black: "#32343E",
    darkBlue: '#7978B5'
}

export const sizes = {
    // GLOBAL SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 8,
    padding2: 12,
    padding3: 16,

    // FONTS SIZES
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // APP DIMENSIONS
    width,
    height
}

export const fonts = {
    largeTitle: { fontFamily: "Signika_700Bold", fontSize: sizes.largeTitle, lineHeight: 40},
    h1: { fontFamily: "Signika_700Bold", fontSize: sizes.h1, lineHeight: 36},
    h2: { fontFamily: "Signika_700Bold", fontSize: sizes.h2, lineHeight: 30},
    h3: { fontFamily: "Signika_700Bold", fontSize: sizes.h3, lineHeight: 22},
    h4: { fontFamily: "Signika_700Bold", fontSize: sizes.h4, lineHeight: 20},
    body1: { fontFamily: "Signika_400Regular", fontSize: sizes.body1, lineHeight: 36 },
    body2: { fontFamily: "Signika_400Regular", fontSize: sizes.body2, lineHeight: 30 },
    body3: { fontFamily: "Signika_400Regular", fontSize: sizes.body3, lineHeight: 22 },
    body4: { fontFamily: "Signika_400Regular", fontSize: sizes.body4, lineHeight: 20}, 
}

const appTheme = { colors, sizes, fonts }

export default appTheme;