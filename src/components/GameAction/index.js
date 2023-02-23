import { Button, Center, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import useAction from "../../hooks/useAction";
import useSorted from "../../hooks/useSorted";

export default function ActionScreen() {
  const { sortedPlayers } = useSorted();
  const { findAction } = useAction();

  return (
    <>
      <Center>
        <div>*người chơi được sắp xếp theo thứ tự gọi</div>
      </Center>
      <Stack>
        {sortedPlayers?.map((player, index) => (
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
