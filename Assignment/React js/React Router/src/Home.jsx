import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className='container mt-3'>
                <div className="row">
                    <h3>Welcome To React Page</h3>
                    <p><b>React</b> is a JavaScript library for building user interfaces.</p>
                    <form action="">
                        <input type="text" />
                        <br />
                        <br />
                        <input type="password" />
                        <br />
                        <br />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <br />
                        <Link to="hello">Click to get Hello </Link>
                        <button className="btn">Click </button>
                    </form>
                    <Outlet></Outlet>
                </div>
            </div>


        );
    }
}
export default Home;