import React from "react";

const

const TypingStatsDashboard = ({ data }) => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Typing Profile: {data.name}</h1>
                <p className="text-gray-700">XP: {data.xp}</p>
                <p className="text-gray-700">Current Streak: {data.streak}</p>
                <p className="text-gray-700">Max Streak: {data.maxStreak}</p>
                <h2 className="text-xl font-semibold mt-4">Typing Stats</h2>
                <p className="text-gray-700">Completed Tests: {data.typingStats.completedTests}</p>
                <p className="text-gray-700">Started Tests: {data.typingStats.startedTests}</p>
                <p className="text-gray-700">Total Typing Time: {Math.round(data.typingStats.timeTyping / 60)} minutes</p>

                <h2 className="text-xl font-semibold mt-4">Personal Bests</h2>
                {Object.entries(data.personalBests.time).map(([time, records]) => (
                    <div key={time} className="mb-4">
                        <h3 className="text-lg font-semibold">{time} Seconds</h3>
                        {records.map((record, index) => (
                            <div key={index} className="p-2 border-b">
                                <p>WPM: {record.wpm} | Accuracy: {record.acc}% | Raw Speed: {record.raw}</p>
                            </div>
                        ))}
                    </div>
                ))}

                <h2 className="text-xl font-semibold mt-4">Leaderboard Rankings</h2>
                {Object.entries(data.allTimeLbs.time).map(([time, categories]) => (
                    <div key={time} className="mb-4">
                        <h3 className="text-lg font-semibold">{time} Seconds</h3>
                        {Object.entries(categories).map(([category, details]) => (
                            <p key={category}>Category: {category} | Rank: {details.rank} / {details.count}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TypingStatsDashboard;
