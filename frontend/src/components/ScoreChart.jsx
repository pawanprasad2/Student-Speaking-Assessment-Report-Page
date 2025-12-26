import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ScoreChart({ scores }) {
  const data = {
    labels: Object.keys(scores),
    datasets: [
      {
        label: "Skill Score",
        data: Object.values(scores),
        backgroundColor: "rgba(59,130,246,0.25)",
        borderColor: "#3b82f6",
        borderWidth: 2,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#ffffff",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 9,
        ticks: {
          stepSize: 3,             
          backdropColor: "transparent",
          color: "#64748b",       
          font: {
            size: 11,
            weight: "500",
          },
        },
        grid: {
          color: "rgba(0,0,0,0.08)",
        },
        angleLines: {
          color: "rgba(0,0,0,0.08)",
        },
        pointLabels: {
          color: "#334155",
          font: {
            size: 12,
            weight: "600",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#60a5fa",
        bodyColor: "#e5e7eb",
        borderColor: "#3b82f6",
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="bg-[#edfff8] border border-slate-200 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Skill Breakdown
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Score range: 0 (lowest) → 9 (highest)
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}
