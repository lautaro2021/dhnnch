type PaletteType = "white" | "grey" | "primaryBlue" | "greyText" | "border";

export const PALETTE: Record<PaletteType, string> = {
    white: "#FFFFFF",
    grey: "#212121",
    primaryBlue: "#0451DD",
    greyText: "#616161",
    border: "#E1E5EC",
};

type Typography = {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    fontStyle: string;
    letterSpacing?: string;
};

type TypographyType =
    | "h1"
    | "h2"
    | "h6"
    | "span"
    | "label"
    | "p"
    | "link"
    | "button";

export const FONTS_L: Record<TypographyType, Typography> = {
    h1: {
        fontSize: "40px",
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: "44px",
    },
    h2: {
        fontSize: "54px",
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: "60px",
    },
    h6: {
        fontSize: "20px",
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: "24px",
    },
    label: {
        fontSize: "10px",
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: "20px",
        letterSpacing: "3px",
    },
    span: {
        fontSize: "14px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "18px",
    },
    p: {
        fontSize: "16px",
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: "22px",
    },
    button: {
        fontSize: "16px",
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: "24px",
    },
    link: {
        fontSize: "14px",
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: "20px",
    },
};
