import React  from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
    render() {
        return ( 
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/skills" component={Skills} />
                        <Route path='/contact' component={Contact} />
                        <Route path="/home" component={Home} />
                        <Route path="/" component={Home} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    };
};

export default App;