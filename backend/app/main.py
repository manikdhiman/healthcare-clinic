from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from app.database import doctor_collection, appointment_collection
from app.schemas import AppointmentSchema, DoctorSchema

app = FastAPI(title="HealthCare Clinic API")

# Connects Next.js (port 3000) safely to FastAPI (port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def item_helper(item) -> dict:
    return {**{k: str(v) if k == "_id" else v for k, v in item.items()}}

@app.get("/")
async def root():
    return {"message": "Welcome to HealthCare Clinic API"}

@app.get("/api/doctors")
async def get_doctors():
    doctors = []
    async for doctor in doctor_collection.find():
        doctors.append(item_helper(doctor))
    return doctors

@app.post("/api/doctors")
async def add_doctor(doctor: DoctorSchema = Body(...)):
    new_doctor = await doctor_collection.insert_one(doctor.model_dump())
    created_doctor = await doctor_collection.find_one({"_id": new_doctor.inserted_id})
    return item_helper(created_doctor)

@app.post("/api/appointments")
async def create_appointment(appointment: AppointmentSchema = Body(...)):
    new_appt = await appointment_collection.insert_one(appointment.model_dump())
    created_appt = await appointment_collection.find_one({"_id": new_appt.inserted_id})
    return {"status": "success", "data": item_helper(created_appt)}