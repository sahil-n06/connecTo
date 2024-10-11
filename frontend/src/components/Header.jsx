import { Flex, Image, useColorMode } from "@chakra-ui/react";
import { useAuthStore } from "../store/authStore";

import { Link, Link as RouterLink } from "react-router-dom";

import { BsFillChatQuoteFill } from "react-icons/bs";



function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user } = useAuthStore();

  return (
    <Flex ml={2}> {/* Margin to create spacing between button and toggle */}
      <Image 
        cursor={'pointer'}
        alt='logo'
        w={6}
        src={colorMode === "dark" ? "light.png" : "dark.png"}
        onClick={toggleColorMode}
      />
      {user && (
				<Flex alignItems={"center"} gap={4}>
					<Link as={RouterLink} to={`/chat`}>
						<BsFillChatQuoteFill size={20} />
					</Link>					
				</Flex>
			)}
    </Flex>
    
  );
}

export default Header;
