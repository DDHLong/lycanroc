import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import PlayerInput from "./components/PlayerInput/PlayerInput";
import { useRole } from "./context/RoleProvider";
import useStart from "./hooks/useStart";
import ActionScreen from "./components/GameAction";
import { NamePriorityEnum } from "./enums/RoleEnum";

const Links = ["Projects", "About"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function App() {
  const { isPlay, startGame } = useStart();
  const { colorMode, toggleColorMode } = useColorMode("dark");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Heading>
        <Box
          fontSize="xl"
          bg={useColorModeValue("gray.100", "purple.600")}
          px={4}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>Werewolf Moderator M</Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <IconButton
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
              ></IconButton>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Heading>

      <Box p={4}>
        {!isPlay ? <PlayerInput startGame={startGame} /> : <ActionScreen />}
      </Box>
    </>
  );
}
