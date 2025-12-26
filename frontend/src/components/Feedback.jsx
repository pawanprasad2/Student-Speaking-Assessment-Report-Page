export default function Feedback({ overallScore }) {
  let color = "";
  let label = "";
  let message = "";

  if (overallScore >= 8) {
    color = "text-emerald-400 border-emerald-400/40";
    label = "Excellent";
    message = "Excellent performance with strong control.";
  } else if (overallScore >= 6) {
    color = "text-amber-400 border-amber-400/40";
    label = "Good";
    message = "Good performance with minor inaccuracies.";
  } else {
    color = "text-rose-400 border-rose-400/40";
    label = "Needs Work";
    message = "Needs improvement.";
  }

  return (
    <div className={`bg-neutral-900 border rounded-3xl p-6 ${color}`}>
      <span className="text-xs uppercase tracking-widest">
       Descriptive feedback
      </span>

      <h3 className="text-2xl font-bold mt-2">
        {label}
      </h3>

      <p className="text-neutral-300 mt-4 leading-relaxed text-sm">
        {message}
      </p>
    </div>
  );
}
