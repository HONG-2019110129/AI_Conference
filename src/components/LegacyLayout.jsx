import { NorthPane } from "./NorthPane";
import { CenterPane } from "./CenterPane";
import { SouthPane } from "./SouthPane";

export function LegacyLayout() {
  return (
    <div style={{ height: "100vh", display: "grid", gridTemplateRows: "56px 1fr 36px" }}>
      <div style={{ borderBottom: "1px solid #ddd", background: "#fff" }}>
        <NorthPane />
      </div>

      <div style={{ overflow: "auto", background: "#f7f7f7" }}>
        <CenterPane />
      </div>

      <div style={{ borderTop: "1px solid #ddd", background: "#fafafa" }}>
        <SouthPane />
      </div>
    </div>
  );
}