import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: 50,

  marginBottom: 15,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  borderRadius: 10,
  padding: 10,

  backgroundColor: "rgb(48, 48, 48)",

  zIndex: 0,

  userSelect: "none",
  cursor: "pointer",
});

export const Content = styled("div", {});

export const ContentTitle = styled("div", {
  flex: "1",
  textAlign: "center",
});

export const Title = styled("h2", {
  fontFamily: "sans-serif",
  color: "white",
});

export const Checkbox = styled("input", {
  width: 25,
  height: 25,
});

export const ContentDescription = styled("div", {
  width: 250,
  minHeight: 120,

  alignItems: "center",
  justifyContent: "center",

  marginTop: "-10px",
  marginBottom: 5,
  padding: 10,

  borderRadius: 10,

  zIndex: 1,

  backgroundColor: "#303030",

  variants: {
    show: {
      true: { display: "flex" },
      false: { display: "none" },
    },
  },
});

export const Description = styled("p", {
  fontFamily: "sans-serif",
  fontSize: "1.1rem",
  color: "white",

  textAlign: "center",
});
