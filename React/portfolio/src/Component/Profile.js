import React from 'react';
// import Personal from './Personal';
import './Profile.css';

const Profile = (props) => {
  return (
    <div className={props.value ? 'profile' : 'display-none'}>
        <ul className='details'>
            <li>Father's Name : Arvind Dhoble</li>
            <li>Mother's Name : Ranjana Dhoble</li>
            <li>Date of Birth : 14/03/1999</li>
            <li>Hobbies and Interest: Travelling</li>
            <li>Blood Group : A+</li>
            <li>Nationality : Indian</li>
            <li>Address: Dighori, Nagpur.</li>
        </ul>
    </div>
  )
}

export default Profile