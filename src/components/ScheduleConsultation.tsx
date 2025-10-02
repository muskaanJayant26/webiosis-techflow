import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from  "axios"

export default function ScheduleConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    date: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://webiosis-techflow-backend.onrender.com/api/save", {
      ...formData,
      sheetName: "schedule a consultation", // <-- sub-sheet ka naam
    });

    console.log(response.data);
    alert("Booking saved ✅ in Google Sheets");

    setFormData({ name: "", email: "", project: "", date: "" }); // reset form

  } catch (error) {
    console.error("Error:", error.message);
    alert("Something went wrong ❌");
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg w-full text-black max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Schedule a Consultation
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              About Your Project
            </label>
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Enter project details"
              className="w-full mt-1 px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="gradient-primary text-white">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  );
}

