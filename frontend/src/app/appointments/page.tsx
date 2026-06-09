"use client";
import { useEffect, useState } from "react";

interface Appointment {
  _id: string;
  patient_name: str;
  phone: str;
  email: str;
  doctor_id: str;
  date_time: str;
  status: str;
}

export default function AppointmentsDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetches real-time appointment records straight from your FastAPI server
    fetch("http://localhost:8000/api/appointments")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch records.");
        return res.json();
      })
      .then((data) => {
        // Handle array response if wrapped or direct
        setAppointments(Array.isArray(data) ? data : data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-left">
      <div className="mb-8">
        <span className="text-sm font-bold tracking-wider text-[--color-medical-blue] uppercase">Staff Console</span>
        <h1 className="text-3xl font-black text-slate-900 mt-1 tracking-tight">Clinic Appointment Registry</h1>
        <p className="text-slate-500 text-sm mt-1">Review, monitor, and update incoming client queues real-time.</p>
      </div>

      {loading && (
        <div className="text-center py-12 text-slate-500 animate-pulse font-medium">
          📡 Syncing with healthcare databases...
        </div>
      )}

      {error && (
        <div className="bg-rose-50 border border-rose-100 text-rose-700 p-4 rounded-xl text-sm font-medium">
          ⚠️ Connection Error: {error}. Ensure your FastAPI server backend is running on port 8000.
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 text-slate-400">
          <span className="text-4xl block mb-2">📋</span>
          <p className="font-medium text-slate-600">No appointments registered yet.</p>
          <p className="text-xs text-slate-400 mt-1">New entries will populate here automatically.</p>
        </div>
      )}

      {!loading && !error && appointments.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 border-b border-slate-100 font-semibold">
                  <th className="p-4">Patient Name</th>
                  <th className="p-4">Contact info</th>
                  <th className="p-4">Requested Schedule</th>
                  <th className="p-4">Assigned Department</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {appointments.map((appt) => (
                  <tr key={appt._id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 font-bold text-slate-800">{appt.patient_name}</td>
                    <td className="p-4">
                      <div className="text-slate-700 font-medium">{appt.phone}</div>
                      <div className="text-xs text-slate-400">{appt.email}</div>
                    </td>
                    <td className="p-4 font-medium text-slate-600">{appt.date_time}</td>
                    <td className="p-4 text-slate-500">ID: {appt.doctor_id}</td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-amber-100">
                        {appt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}