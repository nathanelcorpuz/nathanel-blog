export default function NewStandardSectionForm() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <input placeholder="heading" />
      <button type="button">Add a paragraph</button>
    </div>
  );
}
