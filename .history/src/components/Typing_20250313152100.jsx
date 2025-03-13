import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import MonkeyWrapper from 'monkeytype-wrapper';

const monkey = new MonkeyWrapper('YOUR_APE_KEY');

const TypingChart = ({ username }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    monkey.users.profile(username)
      .then((res) => {
        // Extract and process data for the chart
        const data = {
          labels: res.data.map(entry => entry.date), // Example: dates of typing tests
          datasets: [
            {
              label: 'WPM',
              data: res.data.map(entry => entry.wpm), // Example: words per minute
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        };
        setChartData(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [username]);

  return (
    <div>
      <h2>Typing Speed Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default TypingChart;
