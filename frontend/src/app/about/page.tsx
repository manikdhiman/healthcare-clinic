export default function About() {
  const values = [
    { badge: "🤝", title: "Patient First", desc: "Every medical strategy and recovery roadmap we design centers completely around individual patient convenience." },
    { badge: "🌟", title: "Medical Excellence", desc: "Our board-certified staff continuous training programs ensure you receive top-tier diagnostic care." },
    { badge: "🔒", title: "Absolute Privacy", desc: "Your personal health records and diagnostic panels are encrypted under secure HIPAA compliances." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-left">
      {/* Overview */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <span className="text-sm font-bold tracking-wider text-[--color-medical-blue] uppercase">Our Story</span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Redefining Healthcare with Modern Technology
          </h1>
          <p className="text-slate-600 mt-6 leading-relaxed">
            Founded with a vision to eliminate agonizing waiting rooms and disjointed medical communication, HealthCare Clinic blends premium local clinical experts with real-time digital frameworks.
          </p>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Whether you need a routine checkup or specialized cardiology consultation, our practice ensures your data is streamlined and your experience is completely stress-free.
          </p>
        </div>
        <div className="bg-gradient-to-br from-sky-100 to-indigo-100 rounded-2xl h-[320px] flex items-center justify-center border border-slate-100 shadow-inner">
          <span className="text-6xl animate-pulse">🏥</span>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="border-t border-slate-100 pt-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Core Principles</h2>
          <p className="text-slate-500 mt-2 text-sm">The pillars that define how we treat, protect, and serve our community daily.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">{val.badge}</div>
              <h3 className="text-lg font-bold text-slate-800">{val.title}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}