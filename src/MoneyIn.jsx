import { Box } from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";

const MoneyIn = () => {
  return (
    <Box>
      <TransactionTable filter="in" />
    </Box>
  );
};

export default MoneyIn;
