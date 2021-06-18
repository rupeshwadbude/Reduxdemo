
import './App.css';
import FirstPage from './Component/FirstPage'
import SecondPage from './Component/SecondPage'
import ThirdPage from './Component/ThirdPage';
import ShowData from './Component/ShowData';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={FirstPage}></Route>
            <Route exact path="/second" component={SecondPage}></Route>
            <Route exact path="/third" component={ThirdPage}></Route>
            <Route exact path="/show" component={ShowData}></Route>
            </Switch>
        </div>
      </Router>
     {/* <FirstPage />
     <SecondPage />
     <ThirdPage /> */}
    </div>
  );
}

export default App;
