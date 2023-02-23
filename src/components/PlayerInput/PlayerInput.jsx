import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RoleNameEnum } from "../../enums/RoleEnum";
import { usePlayerStore, usePlayStore } from "../../store/store";
import "./index.css";

const options = [
  RoleNameEnum.Villager,
  RoleNameEnum.Protector,
  RoleNameEnum.Seer,
  RoleNameEnum.Werewolf,
  RoleNameEnum.Witch,
];

function PlayerInput({}) {
  const toast = useToast();
  const { isPlay, setIsPlay } = usePlayStore();
  const { players, addPlayer, updatePlayer } = usePlayerStore();
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
    if (value === "") {
      toast({
        title: "Tên không được để trống",
        description: "Name cannot be empty",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom-right",
      });
      throw new Error("Name cannot be empty");
    }
    addPlayer(player);
    setValue("");
  };

  const handleSelect = (event, name) => {
    updatePlayer(name, { role: event.target.value });
  };

  console.log(players);

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
          <Button mr={5} onClick={handleSubmit}>
            Thêm
          </Button>
          <Button onClick={() => setIsPlay(true)}>Chơi</Button>
        </Flex>
        <SimpleGrid mt={7} columns={[1, 2, null, 3]} spacing="40px">
          {players &&
            players.map((p, i) => (
              <div className="slide-in" key={i}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Box className="slide-in" mr={10}>
                    {p.name}
                  </Box>
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
        </SimpleGrid>
      </Box>
    </>
  );
}

export default PlayerInput;
