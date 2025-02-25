import { Link as RouterLink } from "react-router-dom";
import { Box, Link,} from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";

const All = () => {
  return (
    <>
      <Box>
        <TransactionTable/>
      </Box>
    </>
  );
};

export default All;
