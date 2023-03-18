import React, { Component } from 'react';

class ClassCompoJsxExample extends Component {
    render() {
        function btnclick(){
            let a = document.getElementById("A").value;
            let b = document.getElementById("B").value;
            let sum = parseInt(a)+parseInt(b);
            let multi = parseInt(a)*parseInt(b);
            document.getElementById("showdata").innerText = sum 
            document.getElementById("multidata").innerText = multi
        }
        ;
        return (
            <div classname='conatiner'>
                <div className="row">
                    <div className="col">
                        <p>This Are Some Jsx Examples</p>
                        <p>Like Addition & Multification</p>
                        <input type="text" id='A' placeholder='Put a value'/>
                        <br />
                        <br />
                        <input type="text" id='B' placeholder='Put a value'/>
                        <br />
                        <br />
                        <button className='btn' onClick={btnclick}>Get SUM & Multification</button>
                        <div id="showdata" className='m-3'>sum =</div>
                        <div id="multidata" className='m-3'>multification =</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassCompoJsxExample;