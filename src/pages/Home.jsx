import { cheeseData, countryData } from "../data/cleanedData";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function polar(cx, cy, radius, angle) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return [cx + radius * Math.cos(radians), cy + radius * Math.sin(radians)];
}

function CheeseSlice({ item, index }) {
  const start = index * 40 + 2;
  const end = start + 35;
  const outer = 77 + (item.value / 12.5) * 125;
  const [x1, y1] = polar(210, 210, 77, start);
  const [x2, y2] = polar(210, 210, outer, start);
  const [x3, y3] = polar(210, 210, outer, end);
  const [x4, y4] = polar(210, 210, 77, end);
  const [lx, ly] = polar(210, 210, 221, start + 17.5);
  const holeRadius = clamp(outer - 100, 0, 70);
  const [hx, hy] = polar(210, 210, 94 + holeRadius * 0.42, start + 15);
  return (
    <g>
      <path className={`cheese-slice slice-${index}`} d={`M ${x1} ${y1} L ${x2} ${y2} A ${outer} ${outer} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A 77 77 0 0 0 ${x1} ${y1} Z`} />
      {item.value > 1 && <circle className="cheese-hole" cx={hx} cy={hy} r={clamp(item.value * 0.3, 2.4, 5.5)} />}
      <text className="wheel-label" x={lx} y={ly} textAnchor={lx < 190 ? "end" : "start"}>{item.name}</text>
      <text className="wheel-value" x={lx} y={ly + 14} textAnchor={lx < 190 ? "end" : "start"}>{item.value} lb</text>
    </g>
  );
}

function Home() {
  return (
    <div className="site-shell">
      <div className="page-background" aria-hidden="true">
        <img className="page-bg-one" src="./art/bg-1.svg" alt="" />
        <img className="page-bg-two" src="./art/bg-2.svg" alt="" />
        <img className="page-bg-texture" src="./art/texture-bg.svg" alt="" />
      </div>
      <section className="cover-page" aria-label="SAY CHEESE cover page">
        <img className="cover-artwork" src="./art/cover-page.png" alt="SAY CHEESE cover artwork showing a dramatic cheese pull, pink title and floating cheese illustrations" />
        <div className="cover-cheeses-left" aria-hidden="true">
          <img className="left-cheese left-cheese-top" src="./art/cheeses.svg" alt="" />
          <img className="left-cheese left-cheese-mid" src="./art/cheeses.svg" alt="" />
          <img className="left-cheese left-cheese-bottom" src="./art/cheeses.svg" alt="" />
        </div>
      </section>
      <header className="masthead"><span>AN EDITORIAL DATA STORY</span><span>2026</span></header>
      <main>
        <section className="hero-section">
          <p className="eyebrow">A tiny atlas of a very big food</p>
          <h1>SAY<br /><i>CHEESE</i></h1>
          <div className="hero-copy"><p>From a pizza pull to a proud cheese board, cheese carries flavour, place and memory.</p><p>This short data story follows the varieties on the US table and the countries with the highest reported consumption in this project’s cleaned dataset.</p></div>
          <div className="hero-cheese" aria-hidden="true"><span /><span /><span /><b>●</b><b>●</b><b>●</b></div>
        </section>

        <section className="section intro-grid">
          <div><p className="eyebrow">01 — the familiar</p><h2>WE KNOW<br />CHEESE FOR</h2></div>
          <p className="body-copy">Comfort. Celebration. Craft. Cheese can be fresh and milky, rich and stretchy, salty and sharp, or deeply aged. Its character changes with the milk, microbes, moisture and time behind it.</p>
          <div className="known-for"><span>Pizza night</span><span>Cheese boards</span><span>Family recipes</span><span>Regional pride</span></div>
        </section>

        <section className="section types-section">
          <p className="eyebrow">02 — a world of texture</p><h2>TYPES OF CHEESE</h2>
          <div className="type-grid">
            <article><b>01</b><h3>Fresh</h3><p>Ricotta · mozzarella</p></article><article><b>02</b><h3>Soft-ripened</h3><p>Brie · camembert</p></article><article><b>03</b><h3>Semi-hard</h3><p>Gouda · havarti</p></article><article><b>04</b><h3>Hard & aged</h3><p>Parmesan · pecorino</p></article><article><b>05</b><h3>Blue</h3><p>Gorgonzola · stilton</p></article><article><b>06</b><h3>Processed</h3><p>Slices · spreads</p></article>
          </div>
        </section>

        <section className="section country-section">
          <div className="section-heading"><div><p className="eyebrow">03 — across borders</p><h2>TOP CHEESE<br />CONSUMERS</h2></div><p className="chart-note">Annual cheese consumption per person.<br />Values shown in kilograms, 2025.</p></div>
          <div className="country-chart">{countryData.map((item) => <div className="country-row" key={item.country}><span className="country-rank">{String(item.rank).padStart(2, "0")}</span><span className="country-name">{item.country}</span><span className="bar-track"><span className="bar-fill" style={{ width: `${(item.consumption / 17.4) * 100}%` }} /></span><strong>{item.consumption}</strong></div>)}</div>
          <p className="source">VISUAL INPUT: <code>SQL/country_ranked.csv</code> · CLEANED PROJECT DATA · KG / PERSON / YEAR</p>
        </section>

        <section className="section wheel-section">
          <div className="section-heading"><div><p className="eyebrow">04 — the American cheese wheel</p><h2>BY TYPE,<br />BY THE POUND</h2></div><p className="chart-note">US per-capita availability by selected variety.<br />Values shown in pounds, 2024.</p></div>
          <div className="wheel-layout"><svg className="wheel" viewBox="0 0 420 420" role="img" aria-label="Circular bar chart of cheese consumption by type"><circle className="guide guide-1" cx="210" cy="210" r="77" /><circle className="guide" cx="210" cy="210" r="127" /><circle className="guide" cx="210" cy="210" r="177" />{cheeseData.map((item, index) => <CheeseSlice key={item.name} item={item} index={index} />)}<circle className="wheel-centre" cx="210" cy="210" r="59" /><text className="centre-small" x="210" y="202" textAnchor="middle">SAY</text><text className="centre-big" x="210" y="223" textAnchor="middle">CHEESE</text></svg><div className="wheel-insight"><span className="eyebrow">THE TAKEAWAY</span><p><b>Mozzarella and Cheddar</b> make up three quarters of the selected varieties shown.</p><small>Each illustrated wedge is a scaled data mark—not a decorative icon.</small></div></div>
          <p className="source">VISUAL INPUT: <code>SQL/cheese_final_dataset.csv</code> · USDA ERS SOURCE SERIES · LB / PERSON / YEAR</p>
        </section>
      </main>
      <footer><span>SAY CHEESE — 2026</span><span>Data visualisation mini project</span></footer>
    </div>
  );
}

export default Home;
