import React from "react";

export default function Header({ selectedTeam, teamMemberCount }) {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation App</h1>
          <h2>Made by <a href="https://github.com/jackytank" target="_blank" rel="noopener noreferrer">Tri</a></h2>
          <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? 'member' : 'members'}</h3>
        </div>
      </div>
    </header>
  );
}