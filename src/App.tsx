import { BrowserRouter, Route, Switch } from 'react-router-dom';
//! A propriedade 'Switch' é usado para não rodar duas rotas ao mesmo tempo, 
//! se for chamada uma rota, não chamará mais nenhuma
import { Home } from './pages/Home/Home';
import { NewRoom } from './pages/NewRoom/NewRoom';
import { Room } from './pages/Room/Room';
import { AdminRoom } from './pages/AdminRoom/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'
import { ThemeContextProvider } from './contexts/ThemeContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
