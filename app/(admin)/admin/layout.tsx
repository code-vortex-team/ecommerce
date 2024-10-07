import SideMenu from "@/components/sidemenu/SideMenu";
import { Flex } from "@chakra-ui/react";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <Flex>
      <SideMenu>{children}</SideMenu>
    </Flex>
  );
};

export default layout;
