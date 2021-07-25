import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './containers/MainLayout/MainLayout'
function App() {
  return (
    <BrowserRouter>
          <Main></Main>
    </BrowserRouter>
  );
}

export default App;
