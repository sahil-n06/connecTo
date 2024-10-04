import { Flex, Image, useColorMode } from "@chakra-ui/react";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Flex ml={2}> {/* Margin to create spacing between button and toggle */}
      <Image 
        cursor={'pointer'}
        alt='logo'
        w={6}
        src={colorMode === "dark" ? "light.png" : "dark.png"}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}

export default Header;
