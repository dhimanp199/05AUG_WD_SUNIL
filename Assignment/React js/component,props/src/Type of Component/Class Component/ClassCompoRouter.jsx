import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx'
import ClassCompoIntro from "./ClassCompoIntro.jsx";
import ClassCompoJsxExample from "./ClassCompoJsxExample.jsx";
import ClassCompoPorpsExample from "./ClassCompoPorpsExample.jsx";
import ClassComoponentUseStateExample from "./ClassComoponentUseStateExmple.jsx";
import HocClassComoponent from "./HocClassCompo/HocClassComoponent";
class ClassCompoRouter extends Component {
    render() {
        return (
            <>
              <Routes>
                <Route path="/" element={<ClassCompoMenu/> }>
                <Route path="classcompointro" element={<ClassCompoIntro/> }/>
                <Route path="jsxexmple" element={<ClassCompoJsxExample/> }/>
                <Route path="propsexmple" element={<ClassCompoPorpsExample/> }/>
                <Route path="stateexmple" element={<ClassComoponentUseStateExample/> }/>
                <Route path="Hocclasscompoexmple" element={<HocClassComoponent/> }/>
                </Route>
              </Routes>  
            </>
        );
    }
}

export default ClassCompoRouter;