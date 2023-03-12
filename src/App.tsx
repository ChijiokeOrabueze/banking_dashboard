import { useState } from 'react';
import styled from 'styled-components';
import { CurrentPageProvider } from './context/CurrentPageContext';
import SideBar from './templates/side-bar';

const Container = styled.div`
  padding: 10px;
  background-color: #EDF1F2;

`

const PageWrapper = styled.div`
  width: 100%;
  height: 817.54px;

  background-color: #FFFFFF;
  border-radius: 16.2px;

  display: flex;

`
const Pages = styled.div`



`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container className="App">
      <CurrentPageProvider>
        <PageWrapper>
          <SideBar />
          <Pages>

          </Pages>
        </PageWrapper>
      </CurrentPageProvider>
    </Container>
  )
}

export default App
