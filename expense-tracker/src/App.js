
import './App.css';
import { Typography,styled,Box } from '@mui/material';
import Balance from './components/Balance';
import Expense from './components/Expense';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import { useState } from 'react';


const Header = styled(Typography)`
  margin: 0 0 3rem 0;
  font-size: 2rem;
  color: blue;
  text-transform: uppercase;
`

const Component = styled(Box)`
  display:flex;
  background: white;
  width: 800px;
  padding: 1rem;
  margin: auto;
  border-radius: 0.5rem;
  & > div {
    height: 70vh;
    width: 50%;
    padding: 1rem;
  }
`
// box is like div :)
function App() {

  const [transactions, setTransactions] = useState([
    {id:1,text:'Phone', amount: -20},
    {id:2,text:'Gums', amount: -10},
    {id:3,text:'Floor', amount: 20},
    {id:4,text:'Salary', amount: 1050}
  ])

  return (
    <Box className="App">
      <Header>Track you Expenses</Header>
      <Component>
        <Box>
          <Balance transactions={transactions}/>
          <Expense transactions={transactions}/>
          <NewTransactions setTransactions={setTransactions}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;
