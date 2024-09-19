"use client";
import TextField from "@/components/textField/TextField";
import { useColorMode, Button, Input } from "@chakra-ui/react";

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
        <Input variant={"test"}/>
      {/* <TextField title="قیمت" status="changeable" value="value" /> */}
    </>
  );
};

export default Page;
