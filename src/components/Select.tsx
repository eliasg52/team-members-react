export const Select = ({ handleOnChange, selecteadTeam }: any) => {
  return (
    <select
      className="form-select form-select-lg"
      id=""
      onChange={handleOnChange}
      value={selecteadTeam}
    >
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
};
