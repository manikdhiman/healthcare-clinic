import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

# Connects to your local MongoDB instance
MONGO_DETAILS = os.getenv("MONGO_DETAILS", "mongodb://localhost:27017")

client = AsyncIOMotorClient(MONGO_DETAILS)
database = client.healthcare_db

doctor_collection = database.get_collection("doctors")
appointment_collection = database.get_collection("appointments")
user_collection = database.get_collection("users")