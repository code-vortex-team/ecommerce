"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { color } from "../colors";

const Carousel = ({ images }: { images: Array<string> }) => {

  // test url
  // const images = [
  //     "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("initial");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <Box
      position={"relative"}
      // mx={"auto"}
      // border={"1px solid red"}
      height={"480px"}
      maxWidth={"800px"}
      width={"800px"}
      borderRadius="8px"
    >
      <Box
        width={"100%"}
        height={"100%"}
        // border={"1px solid blue"}
        justifyContent={"center"}
        display={"flex"}
        overflow={"hidden"}
      >
        <AnimatePresence>
          <motion.img
            style={{
              objectFit: "contain",
              borderRadius: "8px",
              //   display: "flex",
              //   alignSelf:"center",
              //   border: "1px solid red",
              overflow: "hidden",
            }}
            key={currentIndex}
            src={images[currentIndex]}
            variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : direction === "left" ? "hiddenLeft" : ""}
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
      </Box>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        // pointerEvents="none"
      >
        <Icon
          onClick={handlePrevious}
          cursor={"pointer"}
          color={color.text.primary}
          boxSize={"20px"}
          position={"absolute"}
          left={"-25px"}
          top={"67%"}
          transform={"translateY(-50%)"}
          //   pointerEvents="auto"
        >
          <path
            fill="currentColor"
            d="M10.1172 15.0312C10 15.1484 9.80469 15.2266 9.60938 15.2266C9.41406 15.2266 9.25781 15.1484 
            9.14062 15.0312L4.0625 9.95312C3.90625 9.79688 3.82812 9.64062 3.82812 9.44531C3.82812 9.25 3.90625 
            9.09375 4.0625 8.9375L9.14062 3.85938C9.25781 3.74219 9.41406 3.66406 9.60938 3.66406C9.80469 3.66406 
            10 3.74219 10.1172 3.85938L11.25 5.03125C11.4062 5.14844 11.4844 5.30469 11.4844 5.5C11.4844 5.69531 
            11.4062 5.89062 11.25 6.00781L7.85156 9.44531L11.25 12.8828C11.4062 13 11.4844 13.1953 11.4844 
            13.3906C11.4844 13.5859 11.4062 13.7422 11.25 13.8594L10.1172 15.0312ZM17.1094 9.44531C17.1094 7.88281 
            16.7578 6.4375 15.9766 5.14844C15.1953 3.82031 14.1797 2.80469 12.8516 2.02344C11.5625 1.24219 10.1172 
            0.890625 8.55469 0.890625C6.99219 0.890625 5.54688 1.24219 4.25781 2.02344C2.92969 2.80469 1.91406 3.82031 
            1.13281 5.14844C0.351562 6.4375 0 7.88281 0 9.44531C0 11.0078 0.351562 12.4531 1.13281 13.7422C1.91406 15.0703 
            2.92969 16.0859 4.25781 16.8672C5.54688 17.6484 6.99219 18 8.55469 18C10.1172 18 11.5625 17.6484 12.8516 
            16.8672C14.1797 16.0859 15.1953 15.0703 15.9766 13.7422C16.7578 12.4531 17.1094 11.0078 17.1094 9.44531Z"
          ></path>
        </Icon>

        <Icon
          onClick={handleNext}
          cursor={"pointer"}
          color={color.text.primary}
          boxSize={"20px"}
          position={"absolute"}
          right={"-25px"}
          top={"67%"}
          transform={"translateY(-50%)"}
          //   pointerEvents="auto"
        >
          <path
            fill="currentColor"
            d="M7.96875 15.0312C7.85156 15.1484 7.69531 15.2266 7.5 15.2266C7.30469 15.2266 7.10938 15.1484 6.99219 
            15.0312L5.85938 13.8594C5.70312 13.7422 5.625 13.5859 5.625 13.3906C5.625 13.1953 5.70312 13 5.85938 
            12.8828L9.25781 9.44531L5.85938 6.00781C5.70312 5.89062 5.625 5.69531 5.625 5.5C5.625 5.30469 5.70312 5.14844 
            5.85938 5.03125L6.99219 3.85938C7.10938 3.74219 7.30469 3.66406 7.5 3.66406C7.69531 3.66406 7.85156 3.74219 
            7.96875 3.85938L13.0469 8.9375C13.2031 9.09375 13.2812 9.25 13.2812 9.44531C13.2812 9.64062 13.2031 9.79688 
            13.0469 9.95312L7.96875 15.0312ZM17.1094 9.44531C17.1094 7.88281 16.7578 6.4375 15.9766 5.14844C15.1953 3.82031 
            14.1797 2.80469 12.8516 2.02344C11.5625 1.24219 10.1172 0.890625 8.55469 0.890625C6.99219 0.890625 5.54688 
            1.24219 4.25781 2.02344C2.92969 2.80469 1.91406 3.82031 1.13281 5.14844C0.351562 6.4375 0 7.88281 0 9.44531C0 
            11.0078 0.351562 12.4531 1.13281 13.7422C1.91406 15.0703 2.92969 16.0859 4.25781 16.8672C5.54688 17.6484 6.99219 
            18 8.55469 18C10.1172 18 11.5625 17.6484 12.8516 16.8672C14.1797 16.0859 15.1953 15.0703 15.9766 13.7422C16.7578 
            12.4531 17.1094 11.0078 17.1094 9.44531Z"
          ></path>
        </Icon>
      </Flex>
    </Box>
  );
};

export default Carousel;
