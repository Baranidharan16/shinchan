import React, { useState } from "react";
import { generateAd } from "../api";

function InputPanel({ setCreative }) {
  const [form, setForm] = useState({
    brand: "",
    tone: "",
    product: "",
    audience: "",
    painPoints: "",
    platform: "",
    offer: "",
  });

  const handleSubmit = async () => {
    const result = await generateAd(form);
    setCreative(result);
  };

  return (
    <div className="w-1/4 p-4 bg-white shadow">
      <h2 className="font-bold text-lg mb-4">Creative Brief</h2>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="border p-2 mb-2 w-full"
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 w-full">
        Generate Creative
      </button>
    </div>
  );
}

export default InputPanel;
