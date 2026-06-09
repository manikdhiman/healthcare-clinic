from pydantic import BaseModel, EmailStr
from typing import List

class DoctorSchema(BaseModel):
    name: str
    specialization: str
    experience: int
    availability: List[str]

class AppointmentSchema(BaseModel):
    patient_name: str
    phone: str
    email: EmailStr
    doctor_id: str
    date_time: str
    status: str = "Pending"