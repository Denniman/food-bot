import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from './Pages/Home';
import Summary from './Pages/Summary';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/meal-summary" component={Summary} />
      </Switch>
    </Router>
  );
};

export default Routing;
