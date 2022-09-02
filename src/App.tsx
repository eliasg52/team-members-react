import { useState, useEffect } from 'react';
import {
  Header,
  Employees,
  Footer,
  GroupedTeamMember,
  Nav,
  NotFound,
} from './components';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employees')) || [
      {
        id: 1,
        fullName: 'Bob Jones',
        designation: 'JavaScript Developer',
        gender: 'male',
        teamName: 'TeamA',
      },
      {
        id: 2,
        fullName: 'Jill Bailey',
        designation: 'Node Developer',
        gender: 'female',
        teamName: 'TeamA',
      },
      {
        id: 3,
        fullName: 'Gail Shepherd',
        designation: 'Java Developer',
        gender: 'female',
        teamName: 'TeamA',
      },
      {
        id: 4,
        fullName: 'Sam Reynolds',
        designation: 'React Developer',
        gender: 'male',
        teamName: 'TeamB',
      },
      {
        id: 5,
        fullName: 'David Henry',
        designation: 'DotNet Developer',
        gender: 'male',
        teamName: 'TeamB',
      },
      {
        id: 6,
        fullName: 'Sarah Blake',
        designation: 'SQL Server DBA',
        gender: 'female',
        teamName: 'TeamB',
      },
      {
        id: 7,
        fullName: 'James Bennet',
        designation: 'Angular Developer',
        gender: 'male',
        teamName: 'TeamC',
      },
      {
        id: 8,
        fullName: 'Jessica Faye',
        designation: 'API Developer',
        gender: 'female',
        teamName: 'TeamC',
      },
      {
        id: 9,
        fullName: 'Lita Stone',
        designation: 'C++ Developer',
        gender: 'female',
        teamName: 'TeamC',
      },
      {
        id: 10,
        fullName: 'Daniel Young',
        designation: 'Python Developer',
        gender: 'male',
        teamName: 'TeamD',
      },
      {
        id: 11,
        fullName: 'Adrian Jacobs',
        designation: 'Vue Developer',
        gender: 'male',
        teamName: 'TeamD',
      },
      {
        id: 12,
        fullName: 'Devin Monroe',
        designation: 'Graphic Designer',
        gender: 'male',
        teamName: 'TeamD',
      },
    ]
  );

  const [selecteadTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB'
  );

  const handleOnChange = (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLInputElement;
    setTeam(target.value);
  };

  const handleCliclEmployee = (e: React.SyntheticEvent) => {
    let target = e.currentTarget as HTMLInputElement;

    let transformedEmployees = employees.map((employee: any) =>
      employee.id === parseInt(target.id)
        ? employee.teamName === selecteadTeam
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: selecteadTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  };

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selecteadTeam', JSON.stringify(selecteadTeam));
  }, [selecteadTeam]);

  return (
    <Router>
      <Nav></Nav>
      <Header employees={employees} selecteadTeam={selecteadTeam} />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              handleOnChange={handleOnChange}
              handleCliclEmployee={handleCliclEmployee}
              selecteadTeam={selecteadTeam}
              employees={employees}
            ></Employees>
          }
        ></Route>
        <Route
          path="/group-team-members"
          element={
            <GroupedTeamMember
              employees={employees}
              selectedTeam={selecteadTeam}
              setTeam={setTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
