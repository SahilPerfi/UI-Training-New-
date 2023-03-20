import React from 'react';
import './Project.css';

const Project = (props) => {
  return (
    <>
        <table className={props.projectvalue  ? ' ' : 'display-none'}>
            <tr>
                <th>Project Name</th>
                <th>Technology</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>AT Ford.com</td>
                <td>HTML, Less, JavaScript, jQuery, React JS and AEM</td>
                <td>• On At Ford.com, I developed UI components and fixed many bugs using HTML, Less, JavaScript, jQuery and React JS</td>
            </tr>
        </table>
    </>
  )
}

export default Project;