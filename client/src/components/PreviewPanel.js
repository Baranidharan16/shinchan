function PreviewPanel({ creative }) {
  return (
    <div className="w-2/4 p-6">
      <h2 className="text-xl font-bold mb-4">Ad Preview</h2>
      {creative ? (
        <div className="bg-white p-6 shadow rounded">
          <pre>{creative}</pre>
        </div>
      ) : (
        <p>No creative generated yet.</p>
      )}
    </div>
  );
}

export default PreviewPanel;
