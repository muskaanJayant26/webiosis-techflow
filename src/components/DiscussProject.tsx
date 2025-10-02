import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function DiscussProject({ isOpen, onClose }) {
  if (!isOpen) return null;

  // State to hold all form values
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    date: "",
    details: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://webiosis-techflow-backend.onrender.com/api/save", {
      ...formData,
      sheetName: "Discuss Your Project", // <-- sub-sheet ka naam
    });

    console.log(response.data);
    alert("Booking saved ✅ in Google Sheets");

  } catch (error) {
    console.error("Error:", error.message);
    alert("Something went wrong ❌");
  }
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl text-black shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Discuss Your Project
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
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

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Service You’re Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="ai">AI / Machine Learning</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="security">Cyber Security</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Estimated Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select budget range</option>
                <option value="1k-5k">$1k - $5k</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-50k">$10k - $50k</option>
                <option value="50k+">$50k+</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Consultation Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                About Your Project
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Share your project details"
                rows={4}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full gradient-primary text-white">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}


