import "./styles.scss";
const LeadersTable = ({ data }) => {
  return (
    <table className="leaders-table txt-fontfamily-gaming text-center">
      <thead className="txt-fontfamily-gaming">
        <tr>
          <th>Place</th>
          <th>Username</th>
          <th>Speed</th>
          <th>Level</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((leader, key) => (
          <tr key={key}>
            <td className="leader-position">{leader.position}</td>
            <td className="leader-username">{leader.username}</td>
            <td className="leader-speed">{leader.speed}</td>
            <td className="leader-level">{leader.level}</td>
            <td className="leader-score">{leader.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default LeadersTable;
