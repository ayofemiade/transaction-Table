import { useEffect, useState } from "react";
import { Box, Text, Grid, Image, Flex, Badge } from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

const TransactionTable = ({ filter }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Replace with actual JSON path if needed
    fetch("src/transactions.json")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error loading transactions:", error));
  }, []);

  return (
    <Box
      maxWidth="1100px"
      margin="auto"
      border="2px solid #007bff"
      borderRadius="10px"
      overflow="hidden"
      mt="20px"
      color="black" 
    >
      
     

      {/* Table Header */}
      <Grid
        templateColumns="1fr 2fr 2fr 1fr 1fr 1fr 0.5fr"
        px="20px"
        bg="#FAFAFA"
        py="15px"
        fontSize="14px"
        fontWeight="bold"
        color="gray.600"
        borderBottom="1px solid #ddd"
      >
        <Text>Ref ID</Text>
        <Text>Transaction Date</Text>
        <Text>From</Text>
        <Text>Type</Text>
        <Text>Amount</Text>
        <Text>Status</Text>
        <Text>Actions</Text>
      </Grid>

      {/* Table Rows */}
      {transactions.map((txn, index) => (
        <Grid
          key={index}
          templateColumns="1fr 2fr 2fr 1fr 1fr 1fr 0.5fr"
          px="20px"
          py="12px"
          fontSize="14px"
          alignItems="center"
          borderBottom="1px solid #ddd"
          _last={{ borderBottom: "none" }}
        >
          <Text>{txn.id}</Text>
          <Text>{txn.date}</Text>

          {/* Sender with Icon */}
          <Flex alignItems="center" gap="10px">
            {txn.icon && <Image src={txn.icon} boxSize="20px" borderRadius="full" />}
            <Text>{txn.from}</Text>
          </Flex>

          <Text>{txn.type}</Text>
          <Text fontWeight="bold" color={txn.amount.startsWith("-") ? "red.500" : "green.500"}>
            {txn.amount}
          </Text>

          {/* Status Badge */}
          <Badge
            colorScheme={
              txn.status === "Completed"
                ? "green"
                : txn.status === "Pending"
                ? "orange"
                : "red"
            }
            px="2"
            py="1"
            borderRadius="5px"
          >
            {txn.status}
          </Badge>

          <FaEllipsisV cursor="pointer" color="gray.500" />
        </Grid>
      ))}
    </Box>
  );
};

export default TransactionTable;
