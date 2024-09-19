import { Box, Input, useColorModeValue } from "@chakra-ui/react";

const Page = ({ title, status, value }: {title:string, status:string, value:string}) => {
  return (
    <Box >
      <label htmlFor="textInput">{title}</label>
      <Input
        name="textInput"
        placeholder= {status == "changeable" ? title +" را وارد کنید" : value}
        variant={status == "changeable" ? "outline" : "filled"}
        disabled={status !== "changeable"}
        bg={status === "changeable" ? useColorModeValue("white", "#141516") : useColorModeValue("#EEEFF1", "#3F4043")}
        color={status !== "changeable" ?  useColorModeValue("", "#9CA3AF") : ""}
        marginTop={2}
      ></Input>
    </Box>
  );
};

export default Page;
