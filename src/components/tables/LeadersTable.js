import "./styles.scss";
const LeadersTable = ({ data }) => {
  return (
    <table className="leaders-table txt-fontfamily-gaming text-center">
      <thead className="txt-fontfamily-gaming">
        <tr>
          <th>Place</th>
          <th>Username</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((leader, key) => (
          <tr key={key}>
            <td className="leader-position">{leader.position}</td>
            <td className="leader-username">{leader.username}</td>
            <td className="leader-level">{leader.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default LeadersTable;
