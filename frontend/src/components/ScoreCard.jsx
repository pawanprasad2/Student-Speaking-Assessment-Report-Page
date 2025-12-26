export default function ScoreCard({ data }) {
  return (
    <div className="relative bg-neutral-900 border border-neutral-800 
      rounded-3xl p-8 overflow-hidden">

      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 
          bg-fuchsia-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-neutral-400 text-sm uppercase tracking-widest">
            Candidate
          </p>
          <h2 className="text-3xl font-bold mt-1">
            {data.studentName}
          </h2>
        </div>

        
        <div className="relative w-32 h-32 rounded-full 
          border-4 border-cyan-400 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-black text-cyan-400">
              {data.overallScore}
            </div>
            <div className="text-xs text-neutral-400">
              out of 9
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">
        {Object.entries(data.scores).map(([key, value]) => (
          <div
            key={key}
            className="bg-neutral-800/70 border border-neutral-700 
              rounded-2xl p-4 hover:border-cyan-400 transition"
          >
            <p className="text-xs text-neutral-400 uppercase tracking-wide">
              {key}
            </p>
            <p className="text-2xl font-bold text-white mt-1">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
