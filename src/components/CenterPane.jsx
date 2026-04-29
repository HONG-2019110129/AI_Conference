import schema from "../schemas/sup9.json"; // 실제 경로에 맞게 조정

const cls = {
  label: "text-[12px] font-semibold text-gray-700",
  value: "text-[12px] text-gray-800",
  valueMuted: "text-[12px] text-gray-500",
  input:
    "h-7 w-full rounded border border-gray-300 bg-white px-2 text-[12px] " +
    "focus:outline-none focus:ring-2 focus:ring-blue-200",
  textarea:
    "w-full h-32 rounded border border-gray-300 bg-white p-2 text-[12px] " +
    "focus:outline-none focus:ring-2 focus:ring-blue-200",
};

function HeaderFieldRenderer({ field }) {
  if (field.inputType === "select") {
    return (
      <select className={cls.input} defaultValue={field.defaultValue ?? ""} data-field={field.key}>
        {(field.options || []).map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    );
  }
  const toneClass = field.tone === "muted" ? cls.valueMuted : cls.value;
  return (
    <span className={toneClass} data-field={field.key}>
      {field.value ?? ""}
    </span>
  );
}

function HeaderRow({ field }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-3 items-center py-1">
      <span className={cls.label}>{field.label}:</span>
      <div className="min-w-0">
        <HeaderFieldRenderer field={field} />
      </div>
    </div>
  );
}

function HeaderBlock({ headerFields }) {
  return (
    <div className="mb-4 bg-white border border-gray-200 rounded px-4 py-3">
      {headerFields.map((f) => (
        <HeaderRow key={f.key} field={f} />
      ))}
    </div>
  );
}

function FieldInputRenderer({ field }) {
  switch (field.inputType) {
    case "text":
      return <input type="text" className={cls.input} data-field={field.key} />;
    case "date":
      return <input type="date" className={cls.input} data-field={field.key} />;
    case "textarea":
      return <textarea className={cls.textarea} data-field={field.key} />;
    case "select":
      return (
        <select className={cls.input} data-field={field.key} defaultValue="">
          <option value="" disabled>
            --
          </option>
          {(field.options || []).map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    case "person":
      return (
        <div className="flex gap-2">
          <input type="text" className={cls.input} data-field={field.key} />
          <button
            type="button"
            className="h-7 px-2 border border-gray-300 rounded text-[12px] bg-white hover:bg-gray-50"
            title="assign person"
          >
            +
          </button>
        </div>
      );
    default:
      return null;
  }
}

function FieldRow({ field }) {
  return (
    <div className="flex items-start gap-4 mb-2">
      <div className="w-48 text-right text-sm text-gray-700 pt-1">
        [{field.phase}] {field.label}
      </div>
      <div className="flex-1">
        <FieldInputRenderer field={field} />
      </div>
    </div>
  );
}

function PhaseSection({ phase, title, fields }) {
  return (
    <div className="mb-6">
      {title ? (
        <div className="mb-2 text-[13px] font-semibold text-gray-800">{title}</div>
      ) : null}
      <div className="bg-white border border-gray-200 rounded px-4 py-3">
        {fields.map((f) => (
          <FieldRow key={f.key} field={f} />
        ))}
      </div>
    </div>
  );
}

export function CenterPane() {
  const { headerFields, phases, fields } = schema;

  return (
    <div className="p-4">
      <HeaderBlock headerFields={headerFields} />
      {phases.map((p) => (
        <PhaseSection
          key={p.phase}
          phase={p.phase}
          title={p.title}
          fields={fields.filter((f) => f.phase === p.phase)}
        />
      ))}
    </div>
  );
}