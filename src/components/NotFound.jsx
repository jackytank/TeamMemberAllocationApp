import React from "react";

export default function NotFound({ selectedTeam, teamMemberCount }) {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1 className="text-danger">404 - Not Found</h1>
                </div>
            </div>
        </header>
    );
}