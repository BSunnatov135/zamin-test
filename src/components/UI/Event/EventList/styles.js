import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStylesPagination = makeStyles({
  root: {
    "& .MuiPaginationItem-root": {
      color: "#696969",
      fontWeight: 500,
      fontSize: rem(16),
      lineHeight: rem(22),
    },
  },
});
