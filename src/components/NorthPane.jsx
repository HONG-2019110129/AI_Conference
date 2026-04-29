export function NorthPane() {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center", gap: 12, padding: "0 16px" }}>
      <div style={{ fontWeight: 700, fontSize: 13 }}>Tracker Module</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button style={btn}>Menu 1</button>
        <button style={btn}>Menu 2</button>
        <button style={btn}>Menu 3</button>
      </div>
    </div>
  );
}

const btn = {
  height: 28,
  padding: "0 10px",
  border: "1px solid #ddd",
  borderRadius: 6,
  background: "#fff",
  fontSize: 12,
  cursor: "pointer",
};