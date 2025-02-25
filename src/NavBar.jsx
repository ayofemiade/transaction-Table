import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Flex, Text, NativeSelect, Center,} from "@chakra-ui/react";
import { useState } from "react";
import CustomIndicator from "../public/IconBox/CustomIndicator";
 
import Bro
 

const NavBar = () => {

const [all, setAll] =useState(true)
const [moneyin, setMoneyIn] =useState(false)
const [moneyout, setMoneyOut] =useState(false)

  return (
    <>
      <Box w="1133px" bg="white" textAlign="center" pl="21px">
        <Flex>
          {/* Left side*/}
          <Flex w="820px" justifyItems="center" alignItems="center">
            <Box w="56.07px" h="56.07px" textAlign="Center" pt="14px">
              <Link
                as={RouterLink}
                to="/"
                outline="none"
                textDecoration="none"
                fontWeight="medium"
                color="#737375"
                onClick={() => {
                  if (all === false) {
                    setAll(true);
                    setMoneyIn(false)
                    setMoneyOut(false)
                  }
                }}
              >
                All
              </Link>
               
              {all ?
              <Box
                h="2px"
                bg="#7A00A3"
                borderTopLeftRadius="5px"
                borderTopRightRadius="5px"
                mt="16px"


              ></Box> : null}
            </Box>

            <Box h="56.07px" w="100px" textAlign="Center" pt="14px" ml="20px">
              <Link
                as={RouterLink}
                to="/moneyin"
                textDecoration="none"
                outline="none"
                fontWeight="medium"
                color="#737375"

                onClick={()=>{
                   if(moneyin === false)
                    setMoneyIn(true)
                    setAll(false)
                    setMoneyOut(false)
                }}
              >
                Money In
              </Link>

              {moneyin? <Box
                h="2px"
                bg="#7A00A3"
                borderTopLeftRadius="5px"
                borderTopRightRadius="5px"
                mt="16px"
              ></Box> : null}
            </Box>

            <Box h="56.07px" w="100px" textAlign="Center" pt="14px" ml="20px">
              <Link
                as={RouterLink}
                to="/moneyout"
                textDecoration="none"
                outline="none"
                fontWeight="medium"
                color="#737375"
                onClick={()=>{
                  if(moneyout === false)
                    setMoneyOut(true)
                  setMoneyIn(false)
                }}
              >
                Money Out
              </Link>

              {moneyout?
              <Box
                h="2px"
                bg="#7A00A3"
                borderTopLeftRadius="5px"
                borderTopRightRadius="5px"
                mt="16px"
              ></Box> : null }
            </Box>

          </Flex>

          <Box h="56.07px" w="100px" textAlign="Center" pt="14px">
               <Flex justify='center' alignItems='center'>
              <Text fontWeight="medium" color="#737375">
              Satues:
            </Text>
 
                   <Box>
            <NativeSelect.Root size="sm" width="70px" h='30px'>
                <NativeSelect.Indicator color='purple' fontWeight='20px'/>
              <NativeSelect.Field border='300px'  fontWeight="medium" color="#737375">
                <option value="react">All</option>
                <option value="vue">MoneyIn</option>
                <option value="angular">MoneyOut</option>
               </NativeSelect.Field>
              </NativeSelect.Root>
              </Box>
              </Flex>
            

 


          </Box>

        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
