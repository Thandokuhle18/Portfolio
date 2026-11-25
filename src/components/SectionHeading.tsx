export function SectionHeading({ number, label, title, id }: { number: string; label: string; title: string; id?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">Nº {number} — {label}</p>
      <h2 id={id}>{title}</h2>
    </div>
  )
}
