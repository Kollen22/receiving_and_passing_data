import { Api } from './components/index';
import {Axios} from './services/ApiGet';
import PersonList from './services/ApiPost';
import {GlobalStyles} from './GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyles />
    <PersonList />
    <Axios />
    </>
  );
}

export default App;
