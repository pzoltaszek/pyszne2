import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginContextProvider } from './context/LoginContext';
import Header from './header/Header';
import Search from './search/Search';
import Restaurants from './restaurants/Restaurants';
import Constans from './common/Constans';

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <Router >
        <Route path="/" exact render={(props) => (
          <>
            <LoginContextProvider>
              <Header text={Constans.MainTitle.MainTitle} />
              <Search />
            </LoginContextProvider>
          </>
        )}>
        </Route>
        <Route path="/restaurants" component={Restaurants}>
        </Route>
      </Router >
    </div>
  );
}

export default App;
