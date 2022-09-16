import IOSBatteryPercentage from "./component/IOSBatteryPercentage";
import { FaApple } from 'react-icons/fa';

export default function App() {
  return (
    <div className="app w-[100vw] h-[100vh] flex flex-row items-center justify-center bg-zinc-900">
      <div className="flex flex-col items-center justify-start gap-3">
        <h1 className="leading-snug text-base font-semibold text-white flex flex-row items-center justify-center gap-1.5">
          <FaApple /> {"iOS 16 Battery Component"}
        </h1>
        <IOSBatteryPercentage />
      </div>
    </div>
  )
}