import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 12,
  padding: "6px 30px",
  border: "1px solid",
  lineHeight: 1.5,
  borderRadius: 0,
  backgroundColor: "#121212",
  borderColor: "#121212",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ffffff",
    borderColor: "#121212",
    boxShadow: "none",
    color: "#121212",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});