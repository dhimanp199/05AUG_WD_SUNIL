import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classcompointro">Class Component Intro</Link></li>
                    <li><Link to="jsxexmple">Class Component JSX Exmple</Link></li>
                    <li><Link to="propsexmple">Class Component Props Exmple</Link></li>
                    <li><Link to="stateexmple">Class Component Use state Exmple</Link></li>
                    <li><Link to="Hocclasscompoexmple">Hoc Class Component  Exmple</Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;
