import { useSelector } from "react-redux";
import "./styles.scss";
const LeadersTable = ({ data }) => {
  const { isLoading } = useSelector((state) => state.leaderboardReducer);
  return (
    <table className="leaders-table txt-fontfamily-gaming text-center">
      <thead className="txt-fontfamily-gaming">
        <tr>
          <th>Place</th>
          <th>Username</th>
          <th>Level</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data?.length ? (
          <>
            {data?.map((leader, key) => (
              <tr key={key}>
                <td className="leader-position">{key + 4}</td>
                <td className="leader-username">{leader.username}</td>
                <td className="leader-level">{leader?.scores?.level}</td>
                <td className="leader-score">{leader?.scores?.scores}</td>
              </tr>
            ))}
            {isLoading ? (
              <tr>
                <td style={{ textAlign: "center" }}>Loading...</td>
              </tr>
            ) : null}
            {!isLoading && !data.length ? (
              <tr>
                <td style={{ textAlign: "center" }}>No Data</td>
              </tr>
            ) : null}
          </>
        ) : null}
      </tbody>
    </table>
  );
};
export default LeadersTable;
