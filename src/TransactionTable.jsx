import { Box, Text, Grid} from "@chakra-ui/react";

const TransactionTable = () => {
  return (
    <>  {/* table */}
      <Box maxWidth="1133px" margin="auto" >
       {/* table layout */}
        <Grid templateColumns="1fr 1.5fr 2fr 0.70fr 0.70fr 0.70fr 0.30fr" px='20px' bg='#FAFAFA' py='27px' fontSize='13.89px' fontWeight={"medium"} color='#737375'>
          <Text>Ref ID</Text>
          <Text>Transaction Date</Text>
          <Text>From</Text>
          <Text>Type</Text>
          <Text>Amount</Text>
          <Text>Status</Text>
          <Text>Actions</Text>
        </Grid>

 
      </Box>
    </>
  );
};
export default TransactionTable;
