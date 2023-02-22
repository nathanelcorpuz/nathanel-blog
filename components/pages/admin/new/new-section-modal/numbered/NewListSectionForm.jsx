import { useState } from "react";

export default function NewListSectionForm() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <input placeholder="heading" />
      <button type="button">Add a paragraph</button>
      <button type="button">Add an item</button>
    </div>
  );
}
