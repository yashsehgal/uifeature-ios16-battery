import { useEffect } from "react";
import { useState } from "react"

export default function IOSBatteryPercentage() {
  const [batteryPercentage, setBatteryPercentage] = useState(50);
  const [batteryFillColor, setBatteryFillColor] = useState();
  useEffect(() => {
    if (batteryPercentage >= 0 && batteryPercentage <= 20) {
      setBatteryFillColor('bg-red-500');
    } else if (batteryPercentage >= 20 && batteryPercentage <= 70) {
      setBatteryFillColor('bg-white');
    } else {
      setBatteryFillColor('bg-green-500');
    }
  }, [batteryPercentage]);
  return (
    <div className="ios-battery-percentage-wrapper flex flex-col items-center justify-start gap-3">
      <div className="battery-wrapper flex flex-row items-center justify-center">
        <div className="battery-fill-container w-40 h-16 border-4 border-white rounded-lg p-1 rounded-xl flex flex-row items-center justify-center">
          <div className={`battery-fill w-full rounded-md h-full flex flex-row items-center justify-center ${batteryFillColor}`}>
            <span className={`battery-percentage font-bold text-2xl ${batteryFillColor === "bg-white" ? "text-zinc-700" : "text-white" }`}>{batteryPercentage}</span>
          </div>
        </div>
        {/* <div className="battery-point-container w-4 h-4 rounded-full bg-white"></div> */}
      </div>
      <input type="range" defaultValue={50} className="mt-4" onChange={(batterySlideEvent) => setBatteryPercentage(batterySlideEvent.target.value)} />
    </div>
  )
}