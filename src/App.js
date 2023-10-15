import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';
import ReviewForm from './ReviewForm';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Componentes de navegação, cabeçalho, etc. podem ser colocados aqui */}
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/book/:id" component={BookDetail} />
          <Route path="/add-review/:id" component={ReviewForm} />
        </Switch>
        {/* Rodapé da aplicação pode ser colocado aqui */}
      </div>
    </Router>
  );
}

export default App;