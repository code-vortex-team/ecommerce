import { defineStyleConfig } from "@chakra-ui/react";

const BadgeStyleConfig = defineStyleConfig({
  variants: {
    pink: {
      color: "#F8D4E4",
      bg: "#831747",
      borderRadius: "9999px",
      p: "2px 8px",
      fontWeight: "400",
      fontSize: "11px",
      lineHeight: "16px",
    },
    pinkLg: {
      color: "#F8D4E4",
      bg: "#831747",
      borderRadius: "9999px",
      fontWeight: "400",
      p: "2px 10px",
      fontSize: "12px",
      lineHeight: "20px",
    },
  },
});

export default BadgeStyleConfig;
