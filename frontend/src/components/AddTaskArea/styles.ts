import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
});

export const Title = styled("h1", {
  fontFamily: "sans-serif",
  fontSize: "2.5rem",
  textAlign: "center",
  color: "white",

  borderBottom: "1px solid rgb(68, 68, 68)",

  margin: "15px 0 50px 0",
});
