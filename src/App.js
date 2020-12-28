import './App.css';
import NavBar from './Component/navBar'
import './Component/navBar.css'
import Recipe from './Component/recipe'
import './Component/recipe.css'
import './Component/home.css'
import {Route ,BrowserRouter} from 'react-router-dom'
import Home from './Component/home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe" component={Recipe} />
        
      </div>
  </BrowserRouter>
  );
}

export default App;
