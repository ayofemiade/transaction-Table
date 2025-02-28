import { Box } from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";

const MoneyOut = () => {
  return (
    <Box>
      <TransactionTable filter="out" />
    </Box>
  );
};

export default MoneyOut;
