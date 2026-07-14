// Values transcribed unchanged from the completed CSVs in ../../SQL.
// `country_ranked.csv` and `cheese_final_dataset.csv` are the only inputs
// used by the visualisations in this project.
export const countryData = [
  ["United States", 17.4], ["Canada", 13.7], ["Australia", 12.5],
  ["United Kingdom", 11.9], ["New Zealand", 10.1], ["Argentina", 8.5],
  ["Saudi Arabia", 7.8], ["Chile", 7.4], ["Russia", 5.1], ["Ukraine", 4.9],
  ["Egypt", 4.6],
].map(([country, consumption], index) => ({ country, consumption, rank: index + 1 }));

export const cheeseData = [
  ["Mozzarella", 12.5], ["Cheddar", 10.9], ["Cream cheese", 3.1],
  ["Other", 1.5], ["Hispanic", 1.1], ["Swiss", 1.1],
  ["Muenster", 0.6], ["Blue", 0.3], ["Brick", 0],
].map(([name, value], index) => ({ name, value, rank: index + 1 }));
