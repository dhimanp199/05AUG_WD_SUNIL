import React, { Component } from 'react';
// import React from 'react';
import CustomCard from './CustomCard';

class ClassCompoPorpsExample extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        <CustomCard url='alexander-ant-WgpFgPewFnI-unsplash.jpg' title='card 1' button='know more'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto hic dolore, placeat sint velit.</CustomCard>       
                        </div>
                        <div className="col-4">
                        <CustomCard url='renato-ramos-puma-k4aqqqBBm1Y-unsplash.jpg' title='card 2' button='know more'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto hic dolore, placeat sint velit.</CustomCard>       
                        </div>
                        <div className="col-4">
                        <CustomCard url='alexander-ant-WgpFgPewFnI-unsplash.jpg' title='card 3' button='know more'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto hic dolore, placeat sint velit.</CustomCard>       
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassCompoPorpsExample;