import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Summary from './Pages/Summary';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meal-summary" component={Summary} />
      </Switch>
    </Router>
  );
};

export default Routing;
