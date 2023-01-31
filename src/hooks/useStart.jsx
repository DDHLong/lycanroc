import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useRole } from "../context/RoleProvider";

const useStart = () => {
  const { players } = useRole();
  const toast = useToast();
  const [isPlay, setIsPlay] = useState(false);
  const startGame = () => {
    const isRolesNull = players.some((player) => player.role === null);
    if (!isRolesNull) {
      setIsPlay(true);
    } else {
      toast({
        title: "Chưa tạo đầy đủ chức năng cho người chơi",
        description: "Role null.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };
  return { isPlay, startGame };
};

export default useStart;
