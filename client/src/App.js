import React, { useState } from "react";
import InputPanel from "./components/InputPanel";
import PreviewPanel from "./components/PreviewPanel";
import VariantPanel from "./components/VariantPanel";
import ChatEditor from "./components/ChatEditor";

function App() {
  const [creative, setCreative] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <InputPanel setCreative={setCreative} />
      <PreviewPanel creative={creative} />
      <VariantPanel creative={creative} />
      <ChatEditor creative={creative} setCreative={setCreative} />
    </div>
  );
}

export default App;
