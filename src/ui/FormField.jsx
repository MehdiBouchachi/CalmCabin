// src/components/FormField.jsx
// Reusable form field — renders label + input or textarea

export default function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  as,
  children,
  error,
}) {
  const base =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-amber-500">*</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={base + " resize-none"}
        />
      ) : as === "select" ? (
        <select id={id} value={value} onChange={onChange} className={base}>
          {children}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      )}

      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}
