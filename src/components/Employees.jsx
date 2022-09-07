import React, { useState } from "react";
import TeamMembers from "./TeamMembers";
import Teams from "./Teams";

export default function Employees({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) {

  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}></Teams>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
          </div>
        </div>
      </div>
    </div>
  );
}