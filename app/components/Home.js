import React from 'react';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

class Home extends React.Component {
    render() {
        return (
            <div>
                <About />
                <Skills />
                <Contact />
            </div>
        )
    };
};

export default Home;