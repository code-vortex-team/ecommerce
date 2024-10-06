"use client";
import React, { useState } from "react";
import ShopOrder from "@/components/shopOrder/CreateTable";
import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import { color } from "@/components/colors";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { UserApi } from "@/lib/openapi/apiClient";

const App = async () => {

  // const [data, setData] = useState([])
  // useEffect(() => {
  //     new ProductsApi().apiProductsAllproductsGet().then((r: any) => {
  //       setData(r.data)
  //     })

  // }, [])

  const [data, setData] = useState([
    {
      userID: "565432130",
      name: "Ali",
      email: "myemail@gmail.com",
      isAdmin: true,
      isEditingName: false,
      isEditingEmail: false,
      tempName: "Ali",
      tempEmail: "myemail@gmail.com",
    },
    {
      userID: "565432131",
      name: "Mehdi Hoseini",
      email: "mahdi@gmail.com",
      isAdmin: false,
      isEditingName: false,
      isEditingEmail: false,
      tempName: "Mehdi Hoseini",
      tempEmail: "mahdi@gmail.com",
    },
  ]);

    </>)
}

  const handleSave = (index: number, field: string) => {
    const updatedData = [...data];
    updatedData[index][field.toLowerCase()] = updatedData[index][`temp${field}`];
    updatedData[index][`isEditing${field}`] = false;
    setData(updatedData);
    // new UserApi().apiUsersIdPut( ,{

    // })
  };

  const handleInputChange = (index: number, field: string, newValue: string) => {
    const updatedData = [...data];
    updatedData[index][`temp${field}`] = newValue;
    setData(updatedData);
  };

  const handleToggleAdmin = (index: number) => {
    const updatedData = [...data];
    updatedData[index].isAdmin = !updatedData[index].isAdmin;
    setData(updatedData);
  };

  const handleDeleteRow = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
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
                <Button
                  onClick={() => handleSave(index, "Name")}
                  bg={color.info.main}
                  color={color.text.button}
                >
                  <FaCheck />
                </Button>
                <Input
                  size="sm"
                  value={user.tempName}
                  onChange={(e) => handleInputChange(index, "Name", e.target.value)}
                  height={"inherit"}
                  bg={color.base.textField}
                  borderColor={color.base.textFieldStroke}
                  borderRadius={"8px"}
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
                <Text>{user.name}</Text>
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
                <Button
                  onClick={() => handleSave(index, "Email")}
                  bg={color.info.main}
                  color={color.text.button}
                >
                  <FaCheck />
                </Button>
                <Input
                  size="sm"
                  value={user.tempEmail}
                  onChange={(e) => handleInputChange(index, "Email", e.target.value)}
                  height={"inherit"}
                  bg={color.base.textField}
                  borderColor={color.base.textFieldStroke}
                  borderRadius={"8px"}
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
                <Text>{user.email}</Text>
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
            {user.isAdmin ? <FaCheck style={{ fontSize: "20px" }} /> : <RxCross2 style={{ fontSize: "20px" }} />}
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
            <MdDeleteForever style={{ fontSize: "30px" }} />
          </Button>
        );
      },
    },
  ];

  return (
    <main style={{ width: "90vw", paddingTop: "3rem" }}>
      <ShopOrder columns={columns} data={data} />
    </main>
  );
};

export default App;
