import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function IndustryDiscussionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:5000/api/save", {
      ...formData,
      sheetName: "discuss about industry", // <-- sub-sheet ka naam
    });

    console.log(response.data);
    alert("Booking saved ✅ in Google Sheets");

  } catch (error) {
    console.error("Error:", error.message);
    alert("Something went wrong ❌");
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl text-black shadow-xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Discuss About Industry
        </h2>

        {/* Content */}
        <p className="text-gray-600 mb-4">
          Let’s explore industry trends, challenges, and solutions tailored to your
          business. Share your requirements and we’ll connect you with the right
          experts.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="e.g. Healthcare, FinTech, Education"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Tell us more about your industry needs..."
              required
            ></textarea>
          </div>

          <Button type="submit" size="lg" className="w-full gradient-primary text-white">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
