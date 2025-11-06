export default function About() {
  const facts = [
    { label: "Location", value: "Based in Nairobi, Kenya" },
    { label: "Focus", value: "Design, Development, and Problem Solving" },
    { label: "Interests", value: "Web, AI, and clean user experiences" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">About</h2>
            <p className="mt-2 text-gray-600">
              A short snapshot about Raburii. You can personalize this section with your real
              background, skills and interests.
            </p>
          </div>
          <div className="lg:col-span-2 grid gap-6">
            <div className="rounded-xl border border-gray-200 p-6">
              <p className="text-gray-700 leading-7">
                I enjoy building thoughtful, user-first products. My strengths are clarity,
                consistency and collaboration. Outside work, I explore new tech and read about design systems.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">{f.label}</p>
                  <p className="mt-1 font-medium text-gray-900">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
