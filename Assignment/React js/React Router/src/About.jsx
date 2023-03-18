import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className='container mt-3'>
                <div className="row">
                    <div className="col">
                        <h2>To Know More About Us</h2>
                       <Link to='https://reactjs.org/'>Click here </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;