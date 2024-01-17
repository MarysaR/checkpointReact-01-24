import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Accueil from './pages/Accueil';
// import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
