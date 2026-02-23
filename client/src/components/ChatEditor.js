import React, { useState } from "react";

function ChatEditor({ creative, setCreative }) {
  const [message, setMessage] = useState("");

  const handleEdit = () => {
    setCreative(`${creative}\n\nUser Modification: ${message}`);
    setMessage("");
  };

  return (
    <div className="fixed bottom-0 w-full bg-white p-4 shadow">
      <input
        className="border p-2 w-3/4"
        placeholder="Modify creative..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleEdit} className="bg-blue-500 text-white p-2 ml-2">
        Update
      </button>
    </div>
  );
}

export default ChatEditor;
