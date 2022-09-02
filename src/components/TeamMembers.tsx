import MaleImage from '../assets/images/maleProfile.jpg';
import FemaleImage from '../assets/images/femaleProfile.jpg';

export const TeamMembers = ({
  employee,
  selecteadTeam,
  handleCliclEmployee,
}) => {
  return (
    <div
      className={employee.teamName === selecteadTeam ? 'card standout' : 'card'}
      style={{ cursor: 'pointer' }}
      id={employee.id}
      key={employee.id}
      onClick={handleCliclEmployee}
    >
      <img
        src={employee.gender === 'male' ? MaleImage : FemaleImage}
        alt=""
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation: {employee.designation}</b>
        </p>
      </div>
    </div>
  );
};
