import { defineStyleConfig } from "@chakra-ui/react";
import {color} from "@/components/colors"
const BadgeStyleConfig = defineStyleConfig({
  variants: {
    pink: {
      color: color.primary.lighter,
      bg: color.primary.dark,
      borderRadius: "9999px",
      p: "2px 8px",
      fontWeight: "400",
      fontSize: "11px",
      lineHeight: "16px",
    },
    pinkLg: {
      color: color.primary.lighter,
      bg: color.primary.dark,
      borderRadius: "9999px",
      fontWeight: "400",
      p: "2px 10px",
      fontSize: "12px",
      lineHeight: "20px",
    },
  },
});

export default BadgeStyleConfig;
