"use client";
import React, { useState } from "react";
import ShopOrder from "@/components/shopOrder/CreateTable";
import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import { color } from "@/components/colors";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const App = () => {
  const [data, setData] = useState([
    {
      userID: "565432130",
      name: "Ali",
      email: "myemail@gmail.com",
      isAdmin: true,
      isEditingName: false,
      isEditingEmail: false,
    },
    {
      userID: "565432131",
      name: "Mehdi Hoseini",
      email: "mahdi@gmail.com",
      isAdmin: false,
      isEditingName: false,
      isEditingEmail: false,
    },
  ]);

  const handleToggleEdit = (index: number, field: string) => {
    const updatedData = [...data];
    updatedData[index][`isEditing${field}`] = !updatedData[index][`isEditing${field}`];
    setData(updatedData);
  };

  const handleSave = (index: number, field: string, newValue: string) => {
    const updatedData = [...data];
    updatedData[index][field.toLowerCase()] = newValue;
    updatedData[index][`isEditing${field}`] = false;
    setData(updatedData);
  };

  const handleToggleAdmin = (index: number) => {
    const updatedData = [...data];
    updatedData[index].isAdmin = !updatedData[index].isAdmin;
    setData(updatedData);
  };

  const handleDeleteRow = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1); // Remove the row
    setData(updatedData);
  };

  const columns = [
    {
      id: "userID",
      header: () => "ID",
      accessorKey: "userID",
    },
    {
      id: "name",
      header: () => "نام",
      accessorKey: "name",
      cell: (info: any) => {
        const index = info.row.index;
        const user = data[index];
        return (
          <Flex gap={"3px"} justify={"start"}>
            {user.isEditingName ? (
              <Flex gap={"5px"}>
                <Button onClick={() => handleSave(index, "Name", user.name)} bg={color.info.main} color={color.text.button}>
                  <FaCheck />
                </Button>
                <Input
                  size="sm"
                  value={user.name}
                  height={"inherit"}
                  bg={color.base.textField}
                  borderColor={color.base.textFieldStroke}
                  borderRadius={"8px"}
                //   onChange={(e) => handleSave(index, "Name", e.target.value)}
                />
              </Flex>
            ) : (
              <>
                <Button
                  bg={"none"}
                  boxSize={"inherit"}
                  onClick={() => handleToggleEdit(index, "Name")}
                  padding={"0"}
                >
                  <CiEdit />
                </Button>
                <Text>{info.getValue()}</Text>
              </>
            )}
          </Flex>
        );
      },
    },
    {
      id: "email",
      header: () => "ایمیل",
      accessorKey: "email",
      cell: (info: any) => {
        const index = info.row.index;
        const user = data[index];
        return (
          <Flex gap={"3px"} justify={"start"}>
            {user.isEditingEmail ? (
              <Flex gap={"5px"}>
                <Button onClick={() => handleSave(index, "Email", user.email)} bg={color.info.main} color={color.text.button}>
                  <FaCheck />
                </Button>
                <Input
                  size="sm"
                  value={user.email}
                  height={"inherit"}
                  bg={color.base.textField}
                  borderColor={color.base.textFieldStroke}
                  borderRadius={"8px"}
                //   onChange={(e) => handleSave(index, "Email", e.target.value)}
                />
              </Flex>
            ) : (
              <>
                <Button
                  bg={"none"}
                  boxSize={"inherit"}
                  onClick={() => handleToggleEdit(index, "Email")}
                  padding={"0"}
                >
                  <CiEdit />
                </Button>
                <Text>{info.getValue()}</Text>
              </>
            )}
          </Flex>
        );
      },
    },
    {
      id: "isAdmin",
      header: () => "ادمین",
      accessorKey: "isAdmin",
      cell: (info: any) => {
        const index = info.row.index;
        const user = data[index];
        return (
          <Button
            bg={"none"}
            color={user.isAdmin ? color.success.main : color.error.main}
            onClick={() => handleToggleAdmin(index)}
          >
            {user.isAdmin ? <FaCheck style={{fontSize:"20px"}}/> : <RxCross2 style={{fontSize:"20px"}}/>}
          </Button>
        );
      },
    },
    {
      id: "operations",
      header: () => "عملیات",
      accessorKey: "operations",
      cell: (info: any) => {
        const index = info.row.index;
        return (
          <Button
            bg={color.error.main}
            color={"white"}
            onClick={() => handleDeleteRow(index)}
            padding={"0"}
          >
            <MdDeleteForever style={{fontSize:"30px"}} />
          </Button>
        );
      },
    },
  ];

  return (
    <main>
      <Container maxW={"7xl"} paddingTop={"40px"}>
        <ShopOrder columns={columns} data={data} />
      </Container>
    </main>
  );
};

export default App;
