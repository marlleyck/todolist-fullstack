import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const Content = styled("div", {
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  marginBottom: 15,
});

export const Input = styled("input", {
  fontSize: "1rem",
  padding: 10,
  width: "90%",

  border: "1px solid gray",
  borderRadius: 15,
  color: "white",

  backgroundColor: "transparent",
});

export const Button = styled("button", {
  width: 100,
  padding: 10,
  color: "white",
  fontSize: 15,

  borderRadius: 10,
  outline: "none",
  border: "none",
  transition: "0.3s",

  cursor: "pointer",
  backgroundColor: "#9C7CD4",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
