export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-medium text-blue-600 tracking-wide uppercase">Personal Bio</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Hi, I'm Raburii
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A clean, minimal personal site to introduce who I am, what I do, and how to reach me.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800">
                Learn more
              </a>
              <a href="#contact" className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50">
                Contact
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-1 shadow-xl">
              <div className="h-full w-full rounded-xl bg-white flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 ring-4 ring-white mb-4" />
                  <p className="text-xl font-semibold text-gray-900">Raburii</p>
                  <p className="text-gray-500">Your Name • Your Role</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
