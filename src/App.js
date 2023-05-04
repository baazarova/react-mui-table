import React from 'react';
import { Container } from '@mui/material';
import Header from './components/header/header';
import TableComp from './components/table/table';

function App() {

  const [query, setQuery] = React.useState("")

  return (
    <Container>
      <Header query={query} setQuery={setQuery}/>
      <TableComp query={query} setQuery={setQuery}/>
    </Container>
  );
}

export default App;
