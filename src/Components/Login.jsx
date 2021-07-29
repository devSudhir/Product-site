export function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("LOgin successful");
  };
  return (
    <div style={{ padding: "10px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            style={{ padding: "10px" }}
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            style={{ padding: "10px" }}
            type="Number"
            name="age"
            placeholder="Age"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
