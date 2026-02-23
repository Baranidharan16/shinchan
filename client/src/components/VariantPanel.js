function VariantPanel({ creative }) {
  return (
    <div className="w-1/4 p-4 bg-gray-50">
      <h2 className="font-bold mb-4">Variants</h2>
      {creative ? (
        <div>
          <button className="bg-green-600 text-white p-2 mb-2 w-full">Generate More Headlines</button>
          <button className="bg-purple-600 text-white p-2 w-full">Generate Emotional Variants</button>
        </div>
      ) : (
        <p>No variants yet.</p>
      )}
    </div>
  );
}

export default VariantPanel;
