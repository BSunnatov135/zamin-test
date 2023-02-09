import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStyles = makeStyles(() => ({
  paper: {
    boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.08)",
    width: rem(200),
    padding: "16px 18px",
    borderRadius: "10px",
    cursor: "pointer",
  },
}));
