import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Accueil from './pages/Accueil';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
