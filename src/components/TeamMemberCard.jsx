import React from "react";
import maleProfile from '../images/maleProfile.jpg';
import femaleProfile from '../images/femaleProfile.jpg';

export default function TeamMemberCard({ employee, selectedTeam, handleEmployeeCardClick }) {
    return (
        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
            {
                (employee.gender === 'male') ?
                    <img src={maleProfile} className="card-img-top"></img> :
                    <img src={femaleProfile} className="card-img-top"></img>
            }
            <div className="card-body">
                <h5 className="card-title">Employee Name: {employee.fullName}</h5>
                <p className="card-text">Designation: {employee.designation}</p>
            </div>
        </div>
    );
}