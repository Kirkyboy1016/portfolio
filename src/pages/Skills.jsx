const skillGroups = [
  {
    title: "Skills",
    heading: "h1",
    items: [
      "Critical Thinking",
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Adaptability",
    ],
  },
  { title: "Languages", heading: "h2", items: ["C#", "CSS", "HTML"] },
  {
    title: "Tools",
    heading: "h2",
    items: ["Visual Studio", "Visual Studio Code", "GitHub"],
  },
];

export default function Skills() {
  return (
    <main className="main">
      <section className="skills">
        {skillGroups.map(({ title, heading: Heading, items }) => (
          <div className="skill-box" key={title}>
            <Heading>{title}</Heading>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
