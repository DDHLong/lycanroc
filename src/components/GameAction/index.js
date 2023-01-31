import { Button, Center, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { useRole } from "../../context/RoleProvider";
import { NamePriorityEnum } from "../../enums/RoleEnum";
import useSorted from "../../hooks/useSorted";

export default function ActionScreen() {
  const { sortedPlayers } = useSorted();

  return (
    <>
      <Center>
        <div>*người chơi được sắp xếp theo thứ tự gọi</div>
      </Center>
      <Stack>
        {sortedPlayers.map((player, index) => (
          <div key={index}>
            <HStack>
              <div>{player.name}</div>
              <div>{player.role}</div>
              <Button>Action</Button>
            </HStack>
          </div>
        ))}
      </Stack>
    </>
  );
}
