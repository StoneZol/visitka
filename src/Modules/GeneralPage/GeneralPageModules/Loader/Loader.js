import React from 'react';
import './LoaderStyle.css'

const Loader = () => {
    return (
        <div className='LoaderBox'>
            <div className='Loader'>
            <div class="cssload-container">
                <div class="cssload-teardrop cssload-tearLeft"></div>
                <div class="cssload-teardrop cssload-tearRight"></div>

                <div id="cssload-contain1">
                    <div id="cssload-ball-holder1">
                        <div class="cssload-ballSettings cssload-ball1"></div>
                    </div>
                </div>

                <div id="cssload-contain2">
                    <div id="cssload-ball-holder2">
                        <div class="cssload-ballSettings cssload-ball2"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Loader;
