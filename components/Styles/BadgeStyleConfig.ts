import { defineStyleConfig } from "@chakra-ui/react";

const BadgeStyleConfig = defineStyleConfig({
  baseStyle: {
    color: "#F8D4E4",
    bg: "#831747",
    borderRadius: "9999px",
    p: "2px 8px",
    left: "20px",
    fontWeight: "400",
  },
  sizes: {
    sm: { fontSize: "11px", lineHeight: "16px" },
    lg: { p: "2px 10px", fontSize: "12px", lineHeight: "20px" },
  },
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
});

export default BadgeStyleConfig;
