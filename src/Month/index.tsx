import { getMonthDays } from "../utils";
import "./index.css";

interface MonthProps {
  year: number;
  month: number;
}
const Month = ({ year, month }: MonthProps) => {
  const days = getMonthDays(year, month);
  const weekDays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  return (
    <div className="wrapper">
      <div className="calendar-container">
        <div className="calendar-header">
          <h2>{month}月</h2>
          <h1>{year}</h1>
        </div>

        <div className="calendar-grid">
          {/* 星期表头 */}
          {weekDays.map((d) => (
            <div key={d} className="weekday-label">
              {d}
            </div>
          ))}

          {/* 日期格子 */}
          {days.map((day, index) => (
            <div key={index} className={`day-cell ${day ? "" : "empty"}`}>
              <span className="day-number">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Month;
