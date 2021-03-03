// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider } from 'react-jss';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import theme from './theme';
import 'typeface-roboto';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
