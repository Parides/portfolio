import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <FadeIn transitionDuration="700">
          <NavMenu />
        </FadeIn>
        <ScrollToTop />
        <Switch>
          <Home />
        </Switch>
      </Router>
    </>
  );
}
