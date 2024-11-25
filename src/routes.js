import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/home";
import Equipe from './pages/equipe';
import Individual from './pages/individual';
import Categorias from './pages/categorias';


export default function AppRoute() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/equipe" element={<Equipe />}></Route>
          <Route path="/individual" element={<Individual />}></Route>
          <Route path="/categorias" element={<Categorias />}></Route>
        </Routes>
      </Router>
    );
}
   