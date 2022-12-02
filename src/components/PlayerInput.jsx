import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRole } from "../context/RoleProvider";
import { RoleNameEnum } from "../enums/RoleEnum";

const options = [
  RoleNameEnum.Villager,
  RoleNameEnum.Protector,
  RoleNameEnum.Seer,
  RoleNameEnum.Werewolf,
  RoleNameEnum.Witch,
];

function PlayerInput() {
  const toast = useToast();
  const { players, addPlayer, updatePlayer } = useRole();
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = () => {
    const player = { name: value, role: null, alive: true };
    if (players.find((player) => player.name === value)) {
      toast({
        title: "Đã tồn tại",
        description: "Already exist player.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom-right",
      });
      throw new Error("Already exist player");
    }
    addPlayer(player);
    setValue("");
  };

  const handleSelect = (event, name) => {
    const player = { name: name, role: event.target.value };
    updatePlayer(player);
  };

  return (
    <>
      <Box>
        <Flex>
          <Input
            value={value || ""}
            onChange={handleChange}
            mr={5}
            placeholder="Name"
          />
          <Button onClick={handleSubmit}>Gâu</Button>
        </Flex>
        <Stack mt={7}>
          {players &&
            players.map((p, i) => (
              <div key={i}>
                <Flex mt={3} alignItems={"center"} justifyContent={"center"}>
                  <Box mr={10}>{p.name}</Box>
                  <Select
                    onChange={(e) => handleSelect(e, p.name)}
                    w={200}
                    placeholder="Select role"
                  >
                    {options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </Select>
                </Flex>
              </div>
            ))}
        </Stack>
      </Box>
    </>
  );
}

export default PlayerInput;
