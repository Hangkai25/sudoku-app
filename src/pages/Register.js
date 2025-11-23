export default function Register() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>

      <form style={{ maxWidth: "300px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Username:
          </label>
          <input type="text" style={{ width: "100%", padding: "6px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password:
          </label>
          <input type="password" style={{ width: "100%", padding: "6px" }} />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Verify Password:
          </label>
          <input type="password" style={{ width: "100%", padding: "6px" }} />
        </div>

        <button type="button">Submit</button>
      </form>
    </div>
  );
}
