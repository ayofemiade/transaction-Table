import { Box, Link } from "@chakra-ui/react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";
import MainTable from "./All";
import NavBar from "./NavBar";
import MoneyIn from "./MoneyIn";
import MoneyOut from "./MoneyOut";
 
const TableContainer = () => {
  return (
    <>
      <Router>
        {/*The Table*/}
        <Box>
          <Box>
            <NavBar />
          </Box>


          <Routes>
  <Route path="/" element={<MainTable />} />
  <Route path="/moneyin" element={<MoneyIn />} />
  <Route path="/moneyout" element={<MoneyOut />} />
</Routes>
        </Box>
      </Router>
    </>
  );
};

export default TableContainer;

{
  /* <Box>

<Box>
<ChakraLink as={Link} to="Main" fontSize="lg">Main</ChakraLink>
</Box>

<Routes>
  <Route path="Main" element={<MainTable/>}/>
</Routes>
</Box> */
}
