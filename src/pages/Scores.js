export default function Scores() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>High Scores</h1>
      <p>(mock data only).</p>

      <table
        style={{
          borderCollapse: "collapse",
          marginTop: "20px",
          width: "300px"
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Player
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Easy Cleared
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Normal Cleared
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Hangkai
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>15</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>9</td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              John
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>6</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>3</td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Jack
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>4</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
