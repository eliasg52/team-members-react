import { useState } from 'react';

export const GroupedTeamMember = ({
  employees,
  selectedTeam,
  setTeam,
}: any) => {
  const [groupedEmployees, setgroupedEmployees] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teams = [];
    let teamAMembers = employees.filter(
      (employee: any) => employee.teamName === 'TeamA'
    );
    let teamA = {
      team: 'TeamA',
      members: teamAMembers,
      collapsed: selectedTeam === 'TeamA' ? false : true,
    };
    teams.push(teamA);

    let teamBMembers = employees.filter(
      (employee: any) => employee.teamName === 'TeamB'
    );
    let teamB = {
      team: 'TeamB',
      members: teamBMembers,
      collapsed: selectedTeam === 'TeamB' ? false : true,
    };
    teams.push(teamB);

    let teamCMembers = employees.filter(
      (employee: any) => employee.teamName === 'TeamC'
    );
    let teamC = {
      team: 'TeamC',
      members: teamCMembers,
      collapsed: selectedTeam === 'TeamC' ? false : true,
    };
    teams.push(teamC);

    let teamDMembers = employees.filter(
      (employee: any) => employee.teamName === 'TeamD'
    );
    let teamD = {
      team: 'TeamD',
      members: teamDMembers,
      collapsed: selectedTeam === 'TeamD' ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event: any) {
    let transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );

    setgroupedEmployees(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((employee) => (
        <div
          key={employee.team}
          className="card mt-2"
          style={{ cursor: 'pointer' }}
        >
          <h4
            id={employee.team}
            className="card-header text-secondary bg-white"
            onClick={handleTeamClick}
          >
            Team Name: {employee.team}
          </h4>
          <div
            id={'collapse_' + employee.team}
            className={employee.collapsed === true ? 'collapse' : ''}
          >
            <hr />
            {employee.members.map((member: any) => (
              <div className="mt-2" key={member.id}>
                <h5 className="card-tittle mt-2">
                  <span className="text-dark">
                    Full Name: {member.fullName}
                  </span>
                </h5>
                <p>Designation: {member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};
