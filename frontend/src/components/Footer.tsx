export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-8 text-left">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">🏥 HealthCare Clinic</h3>
          <p className="text-sm leading-relaxed">Providing reliable, modern, and compassionate clinical care right in your neighbourhood.</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Timings</h3>
          <p className="text-sm">Monday - Saturday: 8:00 AM - 8:00 PM</p>
          <p className="text-sm mt-1">Sunday: Emergency Only</p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Contact Details</h3>
          <p className="text-sm">📞 +1 (234) 567-890</p>
          <p className="text-sm mt-1">✉️ support@healthcareclinic.com</p>
        </div>
      </div>
      <hr className="border-slate-800 my-6" />
      <div className="max-w-7xl mx-auto px-6 text-center sm:flex sm:justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} HealthCare Clinic. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
          <a href="tel:911" className="text-[--color-medical-green] font-semibold hover:underline animate-pulse">🚨 Emergency: Call 911</a>
        </div>
      </div>
    </footer>
  );
}