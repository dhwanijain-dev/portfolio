import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays, format } from "date-fns";

// Sample LeetCode data (Replace with your API response)
const leetCodeActivity = {
    "1735689600": 1, "1735776000": 1, "1735862400": 5, "1735948800": 1,
    "1736035200": 1, "1736121600": 1, "1736208000": 6, "1736294400": 3,
    "1736380800": 4, "1736467200": 7, "1736640000": 3, "1736726400": 4,
};

// Convert UNIX timestamps to date format
const transformedData = Object.entries(leetCodeActivity).map(([timestamp, count]) => ({
    date: format(new Date(parseInt(timestamp) * 1000), "yyyy-MM-dd"),
    count,
}));

export default function LeetCodeHeatmap() {
    return (
        <div className="p-4 bg-white shadow rounded-lg h-s">
            <h2 className="text-lg font-semibold mb-4">LeetCode Activity - 2025</h2>
            <CalendarHeatmap
                startDate={subDays(new Date("2025-12-31"), 365)}
                endDate={new Date("2025-12-31")}
                values={transformedData}
                classForValue={(value) => {
                    if (!value) return "color-empty";
                    return `color-scale-${Math.min(value.count, 4)}`; // Scale from 0 to 4+
                }}
                showWeekdayLabels
            />
            <style>{`
        .color-empty { fill: #ebedf0; }
        .color-scale-1 { fill: #c6e48b; }
        .color-scale-2 { fill: #7bc96f; }
        .color-scale-3 { fill: #239a3b; }
        .color-scale-4 { fill: #196127; }
      `}</style>
        </div>
    );
}
