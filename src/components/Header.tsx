export const Header = ({ employees, selecteadTeam }: any) => {
  const numberOfEmployees = employees.filter(
    (employee) => employee.teamName === selecteadTeam
  ).length;

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h3>
            {selecteadTeam} has {numberOfEmployees}{' '}
            {numberOfEmployees > 1 ? 'Members' : 'Member'}
          </h3>
        </div>
      </div>
    </header>
  );
};
