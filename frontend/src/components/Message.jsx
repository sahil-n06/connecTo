import { Avatar, Flex, Text } from "@chakra-ui/react"

const Message = ({ ownMessage }) => {
  return (
    <>
    {ownMessage ? ( 
        <Flex gap={2} alignSelf={"flex-end"}>
            <Text maxW={"350px"} bg={"blue.500"} p={1} borderRadius={"md"} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque corporis at cupiditate ipsam libero quaerat eius debitis deleniti natus!
            </Text>
            <Avatar src="" w="7" h={7}/>
        </Flex>
    ):(
        <Flex gap={2} >
            <Avatar src="" w="7" h={7}/>
            <Text maxW={"350px"} bg={"blue.800"} p={1} borderRadius={"md"} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque corporis at cupiditate ipsam libero quaerat eius debitis deleniti natus!
            </Text>
            <Avatar src="" w="7" h={7}/>
        </Flex>
    )}

    </>
  )
}

export default Message