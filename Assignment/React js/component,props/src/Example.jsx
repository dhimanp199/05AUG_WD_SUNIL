import React from 'react';

import { Link, Outlet } from "react-router-dom";

const Examples = () => {
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-6">
                    <h2><Link to="classcompo">Class Component</Link></h2>
                </div>
                <div className="col-6">
                    <h2><Link to="functionalcompo">Fuctional Component</Link></h2>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Examples;