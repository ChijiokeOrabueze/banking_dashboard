import { useState } from 'react';
import styled from 'styled-components';
import { CurrentPageProvider } from './context/CurrentPageContext';
import Pages from './pages';
import SideBar from './templates/side-bar';

const Container = styled.div`
  padding: 10px;
  background-color: #EDF1F2;
  // display: flex;
  // width: 100vw;
  // align-items: center;

`

const PageWrapper = styled.div`
  width: 100%;
  height: 817.54px;
  width: 1053px;

  background-color: #FFFFFF;
  border-radius: 16.2px;
  margin: auto;

  display: flex;

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="App">
      <CurrentPageProvider>
        <PageWrapper>
          <SideBar />
          <Pages />
        </PageWrapper>
      </CurrentPageProvider>
    </Container>
  )
}

export default App
