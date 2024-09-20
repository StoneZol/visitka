import React, {useState, useEffect} from 'react';
import './GeneralPageStyle.css';
import {nameStoneZol, nameGriseoVul} from './GeneralPageModules/UserData';
import UserCart from './GeneralPageModules/UserCart/UserCart';
import backgroundvideo from '../ImageSourse/backgroundvideo.mp4'
import Loader from './GeneralPageModules/Loader/Loader';

const GeneralPage = () => {
    const [loading, setLoading] = useState(true)

    const handeleVideoLoaded = () => {
        setLoading(false)
    }

    return (

        <div className='GeneralPageBox'>
            <div className='GeneralPage'>
                <div className='Users'>
                    <div className='animated-background'>                   
                        <video
                            src={backgroundvideo}
                            autoPlay="autoPlay"
                            muted="muted"
                            loop="loop"
                            playsInline="playsInline"
                            className='background-video'/>
                    </div>
                    <UserCart user={nameStoneZol}/>
                    <UserCart user={nameGriseoVul}/>
                </div>
            </div>
            <span className='backgroundOriginal'>
                <a href="https://coub.com/view/3829vl">background from COUB</a>
            </span>
        </div>
    );
}

export default GeneralPage;
