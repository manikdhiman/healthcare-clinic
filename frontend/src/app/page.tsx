import Link from "next/link";

export default function Home() {
  const services = [
    { icon: "🩺", title: "General Consultation", desc: "Comprehensive routine physical health checks and primary medical evaluations." },
    { icon: "👶", title: "Pediatrics Care", desc: "Specialized, gentle medical treatment and diagnostics for infants and growing children." },
    { icon: "❤️", title: "Cardiology Unit", desc: "Advanced cardiac evaluations, screenings, and preventive heart care management." },
    { icon: "🦷", title: "Dental Health", desc: "Complete oral hygiene maintenance, restorative surgeries, and cosmetic services." },
    { icon: "🧪", title: "Laboratory Tests", desc: "State-of-the-art diagnostic testing, precise blood works, and quick panel reports." },
    { icon: "💉", title: "Vaccinations", desc: "Safe immunization schedules and travel vaccine defenses for family protection." }
  ];

  return (
    <div className="w-full">
      {/* 🚀 Hero Section Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-16 md:py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left">
          <div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
              ✨ Trusted Community Medical Care
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
              Compassionate Care for a <span className="text-[--color-medical-blue]">Better Tomorrow</span>
            </h1>
            <p className="text-slate-600 mt-6 text-lg leading-relaxed max-w-xl">
              Access premium clinical specialists, schedule painless online bookings, and seamlessly keep track of your family's personal health diagnostics all in one platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="bg-[--color-medical-blue] text-white px-8 py-4 rounded-full font-bold hover:bg-[--color-medical-darkBlue] shadow-lg shadow-sky-200 transition text-center transform hover:-translate-y-0.5">
                Book an Appointment
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition text-center flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
          
          {/* Aesthetic CSS Image Card Placeholder */}
          <div className="hidden md:flex bg-gradient-to-tr from-sky-100 to-emerald-100 rounded-3xl h-[400px] border border-white shadow-xl relative items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="text-center p-8">
              <span className="text-7xl block mb-4 animate-bounce">👩‍⚕️</span>
              <p className="text-slate-700 font-bold text-xl tracking-wide">HealthCare Professionals Available 24/7</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Call +1 (234) 567-890</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🩺 Core Featured Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Core Medical Services</h2>
          <div className="w-16 h-1 bg-[--color-medical-blue] mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-3 text-base">Providing premier, patient-centric clinical services catered entirely around user convenience and optimal medical diagnostics.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between">
              <div>
                <div className="text-4xl bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner mb-6 border border-slate-100">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">{srv.title}</h3>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">{srv.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50">
                <Link href="/book" className="text-[--color-medical-blue] font-bold text-sm inline-flex items-center gap-1 hover:text-[--color-medical-darkBlue] group">
                  Book Service <span className="group-hover:translate-x-1 transition duration-200">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}