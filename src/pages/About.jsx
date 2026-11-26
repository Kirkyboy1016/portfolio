const education = [
  { school: "Adamson University", years: "2026-2027" },
  { school: "STI Baliuag College", years: "2024-2026" },
  { school: "San Benildo Integrated School", years: "2021-2024" },
];

export default function About() {
  return (
    <main className="main">
      <div>
        <section className="about">
          <h1>About Me</h1>
          <p className="about-box">
            I like to practice coding. My favorite sport is badminton, that way
            I can move my whole body.
          </p>
        </section>

        <section className="about">
          <h1>Education Background</h1>
          <div className="about-box">
            <ul>
              {education.map(({ school, years }) => (
                <li key={school}>
                  {school} {years}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
