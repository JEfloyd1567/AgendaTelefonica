import ListaContactos from './views/listaContactos.js'
import DetallesContacto from './views/detallesContacto.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ListaContactos />} />
          <Route path="/editar/:id" element={<DetallesContacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
