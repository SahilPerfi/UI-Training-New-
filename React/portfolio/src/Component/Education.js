import React from "react";
import "./Education.css";

const Education = (props) => {
  return (
    <>
        <div className={props.educationvalue ? " " : "display-none"}>
            <table>
            <tr>
                <th>Year</th>
                <th>Degree/Certificate</th>
                <th>University/Board</th>
                <th>School/College</th>
                <th>Remark</th>
            </tr>
            <tr>
                <td>2020-21</td>
                <td>BE Year IV</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2019-20</td>
                <td>BE Year III</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2020-21</td>
                <td>BE Year IV</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2018-19</td>
                <td>BE Year II</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2017-18</td>
                <td>BE Year I</td>
                <td>*RTMNU</td>
                <td>**SBJITMR</td>
                <td>All Clear</td>
            </tr>
            <tr>
                <td>2017</td>
                <td>H.S.C</td>
                <td>***STATE</td>
                <td>Vittalrao Chamat Jr college</td>
                <td>Pass</td>
            </tr>
            <tr>
                <td>2015</td>
                <td>S.S.C</td>
                <td>****CBSE</td>
                <td>Sanskar Vidya Sagar</td>
                <td>Pass</td>
            </tr>
            </table>
            <div className="starmark">
                <span>
                    *Rashtrasant Tukdoji Maharaj Nagpur University.
                    <br />
                    **S B Jain Institute of Technology, Management and ResearchNagpur.
                    <br />
                    ***Maharashtra State Board of Secondary and Higher Secondary
                    Education, Pune.
                    <br />
                    ****Central Board of Secondary Education
                    <br />
                </span>
            </div>
        </div>
    </>
  );
};

export default Education;
