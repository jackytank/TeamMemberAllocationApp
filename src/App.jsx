import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';
import { useState } from 'react';
import data from './db/data';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

export default function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeesList')) || data);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((emp) => emp.id === parseInt(event.currentTarget.id)
      ? (emp.teamName === selectedTeam) ? { ...emp, teamName: '' } : { ...emp, teamName: selectedTeam }
      : emp);
    setEmployees(transformedEmployees);
  }

  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <div>
      <Router>
        <Nav></Nav>
        <Header selectedTeam={selectedTeam}
          teamMemberCount={employees.filter(e => e.teamName === selectedTeam).length}
        />
        <Routes>
          <Route path="/"
            element={<Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />}>
          </Route>
          <Route path='/GroupedTeamMembers'
            element={<GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />}>
          </Route>
          <Route path='*' element={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
