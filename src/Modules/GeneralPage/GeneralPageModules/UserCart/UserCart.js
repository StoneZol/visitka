import React from 'react';
import './UserCartStyle.css'
import { Link } from 'react-router-dom';

const UserCart = ({user}) => {
    return (
        <div className='UserCardBox'>
            <div className='UserCard'>
                <div className='UserImageBox'>
                    <div className='UserImage'>
                        <img src={`${user.imageSrc}`} alt=":(" />
                        <div className='UserAbout'>
                            <span>{user.about}</span>
                            <h2><Link to={user.linkPath}>{user.username}</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCart;
