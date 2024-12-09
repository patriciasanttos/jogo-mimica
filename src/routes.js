import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/home";
import Players from "./pages/players";
import Categories from './pages/categories';
import StartGame from "./pages/startGame";


export default function AppRoute() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/players" element={<Players />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/startGame" element={<StartGame/>}></Route>
        </Routes>
      </Router>
    );
}
   