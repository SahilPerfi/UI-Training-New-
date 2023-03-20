import React from 'react';
import './Achievement.css';

const Achievement = (props) => {
  return (
    <div className={props.achievevalue ? 'achievement' : 'display-none'}> 
        <ul>
            <li>HTML, CSS, C, C++, SQL, Java etc. certification by Sololearn, Udemy.</li>
            <li>Soft Skills, Speak Effectively certification by Udemy </li>
            <li>C, C++, HTML Test organized by Spoken Tutorial Project, IIT Bombay.</li>
            <li>Won 1st Position in Monument Making Competition in SBJITMR</li>
            <li>Volunteered Various events under Koshish Club.</li>
            <li>Volunteered various programs under “Unnat Bharat Abhiyan”.</li>
            <li>National level Online Project Paper Competition at Government Polytechnic Nagpur.</li>
        </ul>
    </div>
  )
}

export default Achievement