import Image from "next/image";
import bgImg from "@/public/images/notFoundBG.webp";
import { Box, Text } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

const NotFound = () => {
  return (
    <main style={{ overflow: "hidden" }}>
      <Image
        alt="not found image"
        src={bgImg}
        style={{
          objectFit: "cover",
          height: "100vh",
          width: "100vw",
          zIndex: "0",
          filter: "blur(2px)",
        }}
      ></Image>
      <Box
        position={"absolute"}
        justifyContent={"center"}
        top={"10%"}
        left={"30%"}
        zIndex={"2"}
        width={"40vw"}
        height={"80vh"}
        border={"30px solid white"}
        fontFamily={"sans-serif"}
      >
        <Box
          zIndex={"1"}
          width={"100%"}
          height={"100%"}
          //   bg={"white"}
          border={"10px solid white"}
          bg={"rgba(255, 255, 255, 0.6)"}
          //   opacity={"0.6"}
        >
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            zIndex={"3"}
            color={"black"}
            flexDirection={"column"}
          >
            <Text
              zIndex={"5"}
              fontSize={"5rem"}
              fontWeight={"800"}
              color={"black"}
              fill={"black"}
              marginTop={"2rem"}
              textShadow="2px 2px 8px rgba(0,0,0,0.3)"
            >
              !404
            </Text>
            <Text
              marginBottom={"3rem"}
              fontSize={"1.2rem"}
              textAlign={"center"}
            >
              صفحه مورد نظر شما پیدا نشد!
            </Text>
            <Box
              as={Link}
              href={"/"}
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              cursor={"pointer"}
              _hover={{color:"green.700"}}
            >
              <IoHome fontSize={"4rem"}/>
              <Text fontSize={"1.2rem"} fontWeight={"500"} textAlign={"center"}>
                برای بازگشت به خانه کلیک کنید
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default NotFound;
