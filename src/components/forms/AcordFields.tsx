"use client";

import { ACORD_FIELDS, type AcordField } from "@/lib/acord-fields";

type Props = {
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
};

const inputClass = "w-full px-4 py-2.5 border rounded-lg";
const labelClass = "block text-sm font-bold mb-1.5";

function Control({ f, value, onChange }: { f: AcordField; value: string; onChange: (v: string) => void }) {
  const id = `acord-${f.name}`;
  if (f.type === "yesno") {
    return (
      <div className="flex gap-5 pt-1" role="radiogroup" aria-label={f.label}>
        {["Yes", "No"].map((o) => (
          <label key={o} className="inline-flex items-center gap-2 text-sm">
            <input type="radio" name={f.name} value={o} checked={value === o} onChange={() => onChange(o)} />
            {o}
          </label>
        ))}
      </div>
    );
  }
  if (f.type === "select") {
    return (
      <select id={id} name={f.name} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
        <option value="">Select...</option>
        {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    );
  }
  if (f.type === "textarea") {
    return <textarea id={id} name={f.name} rows={3} maxLength={f.maxLength} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />;
  }
  return <input id={id} type={f.type} name={f.name} min={f.type === "number" ? 0 : undefined} maxLength={f.maxLength} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />;
}

export function AcordFields({ values, onChange }: Props) {
  const groups: string[] = [];
  for (const f of ACORD_FIELDS) if (!groups.includes(f.group)) groups.push(f.group);
  return (
    <div className="space-y-6">
      <p className="text-xs text-mocha/70">Optional details that let us quote faster. Skip anything you do not have handy.</p>
      {groups.map((g) => (
        <fieldset key={g} className="space-y-4">
          <legend className="text-sm font-heading font-extrabold text-espresso mb-2">{g}</legend>
          {ACORD_FIELDS.filter((f) => f.group === g && (!f.when || values[f.when[0]] === f.when[1])).map((f) => (
            <div key={f.name}>
              <label htmlFor={f.type === "yesno" ? undefined : `acord-${f.name}`} className={labelClass}>{f.label}</label>
              <Control f={f} value={values[f.name] ?? ""} onChange={(v) => onChange(f.name, v)} />
            </div>
          ))}
        </fieldset>
      ))}
    </div>
  );
}
