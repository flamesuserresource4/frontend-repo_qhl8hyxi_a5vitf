import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const links = [
    { icon: Mail, label: "Email", href: "mailto:your@email.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
    { icon: Github, label: "GitHub", href: "https://github.com/" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-white to-gray-50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Let's connect</h2>
              <p className="mt-2 text-gray-600">Open to interesting conversations and opportunities.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {links.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
