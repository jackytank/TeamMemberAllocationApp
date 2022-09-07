import React from "react";
import { useState } from "react";

export default function GroupedTeamMembers({ employees, selectedTeam, setTeam }) {
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());


    function groupTeamMembers() {
        var teams = [];

        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
        teams.push(teamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
        teams.push(teamB);

        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
        teams.push(teamC);

        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
        teams.push(teamD);

        return teams;
    }

    function handleTeamClick(event) {
        var transformedGroupData = groupedEmployees.map((e) => e.team === event.currentTarget.id
            ? { ...e, collapsed: !e.collapsed }
            : e);
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {
                groupedEmployees.map((e) => {
                    return (
                        <div key={e.team} className="card mt-2" style={{ cursor: 'pointer' }}>
                            <h4 id={e.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                Team Name: {e.team}
                            </h4>
                            <div id={'collapse_' + e.team} className={e.collapsed === true ? 'collapse' : ''}>
                                <hr />
                                {
                                    e.members.map(member => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Fullname: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }


            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Grouped Team Members</h1>
                </div>
            </div>
        </main>
    );
}