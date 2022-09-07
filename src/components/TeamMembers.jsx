import TeamMemberCard from './TeamMemberCard';

export default function TeamMembers({ employees, handleEmployeeCardClick, selectedTeam }) {
    return (
        employees.map((employee) => (
            <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
        ))
    );
};
