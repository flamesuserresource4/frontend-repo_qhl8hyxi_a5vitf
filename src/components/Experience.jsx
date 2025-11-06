export default function Experience() {
  const items = [
    {
      role: "Software Engineer",
      company: "Acme Co.",
      period: "2021 — Present",
      points: [
        "Building modern web apps with React and Tailwind",
        "Designing clean APIs and backend services",
        "Collaborating closely with design and product"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Studio XYZ",
      period: "2019 — 2021",
      points: [
        "Led component library efforts",
        "Improved performance and accessibility",
        "Mentored junior developers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Experience</h2>
        <div className="mt-8 grid gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-lg font-medium text-gray-900">{item.role} · {item.company}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
              </div>
              <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
