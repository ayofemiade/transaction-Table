import { Box, Flex } from "@chakra-ui/react" 
import TableContainer from "./TableContainer"
 
 const App =()=>{
  return(
    <>
    
    <Box bg="white" h="100vh">

        <Flex justify='Center' alignItems='Center'>
           <TableContainer/>
        </Flex>
      </Box>
    </>
  )
 }

 export default App 