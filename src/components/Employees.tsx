import { Select } from './Select';
import { TeamMembers } from './TeamMembers';

export const Employees = ({
  handleOnChange,
  employees,
  selecteadTeam,
  handleCliclEmployee,
}: any) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <Select
            handleOnChange={handleOnChange}
            selecteadTeam={selecteadTeam}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee: any) => {
              return (
                <TeamMembers
                  key={employee.id}
                  employee={employee}
                  selecteadTeam={selecteadTeam}
                  handleCliclEmployee={handleCliclEmployee}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
