
import { useEffect, useState } from "react";
import Papa from "papaparse";

function CheeseData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/cheese_final_dataset.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const result = Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
        });

        setData(result.data);
        console.log(result.data);
      });
  }, []);

  return (
    <div>
      <h2>Cheese Dataset</h2>

      <p>Total Cheese Types: {data.length}</p>

      {data.map((row) => (
        <div key={row.Rank}>
          {row.Rank}. {row.Cheese} — {row.Consumption}
        </div>
      ))}
    </div>
  );
}

export default CheeseData;