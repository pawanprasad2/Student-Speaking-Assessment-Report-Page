import { useEffect, useState } from "react";
import ScoreCard from "../components/ScoreCard";
import ScoreChart from "../components/ScoreChart";
import Feedback from "../components/Feedback";

export default function ReportPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data)
    return (
      <div className="h-screen flex items-center justify-center text-neutral-400">
        Loading…
      </div>
    );

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-8 py-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              Student Speaking Assessment Report
            </h1>
          
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <ScoreCard data={data} />
          </div>

          <div className="col-span-12 lg:col-span-4">
            <Feedback overallScore={data.overallScore} />
          </div>
        </div>

        <ScoreChart scores={data.scores} />
      </div>
    </div>
  );
}
