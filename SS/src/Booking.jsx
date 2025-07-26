import React, { useState, useMemo } from "react";
import services from "./data/service"; // make sure path/file is correct

const defaultSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM", "08:00 PM",
];

// 👉 put your Formspree endpoint here
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdkdgoje";

const BookService = () => {
  const [form, setForm] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [openConfirm, setOpenConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  // block past dates
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const validate = () => {
    const e = {};
    if (!form.service) e.service = "Please select a service.";
    if (!form.date) e.date = "Please select a date.";
    if (form.date && form.date < minDate) e.date = "Please choose a future date.";
    if (!form.time) e.time = "Please pick a time slot.";
    if (!form.name) e.name = "Your name is required.";
    if (!form.email) e.email = "Your email is required.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email.";
    if (!form.message) e.message = "Tell me briefly about your need.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSendError("");
    if (!validate()) return;
    setOpenConfirm(true);
  };

  const confirmBooking = async () => {
    setLoading(true);
    setSendError("");
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" }, 
        body: data,
      });

      const json = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setOpenConfirm(false);
        setForm({
          service: "",
          date: "",
          time: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSendError(
          json?.errors?.[0]?.message ||
            "Something went wrong while sending your booking. Please try again."
        );
      }
    } catch (err) {
      console.error(err);
      setSendError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section
      id="book-service"
      className="min-h-screen pt-24 pb-16 px-4 sm:px-8 bg-[#f3f4f6] dark:bg-[#000000] text-[#000000] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3">Book a Service</h1>
        <p className="text-center text-[#374151] dark:text-[#9ca3af] mb-10">
          Pick your service, choose a suitable date & time, and I’ll get back to you.
        </p>

        {submitted && (
          <div className="mb-6 rounded-xl bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-4 py-3">
            ✅ Your request has been submitted. I’ll contact you shortly!
          </div>
        )}

        {sendError && (
          <div className="mb-6 rounded-xl bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 px-4 py-3">
            ❌ {sendError}
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow p-6 space-y-5"
        >
          <div>
            <label className="block mb-1 font-medium">Service *</label>
            <select
              name="service"
              value={form.service}
              onChange={onChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 outline-none"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.label}>
                  {s.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Date *</label>
              <input
                type="date"
                name="date"
                min={minDate}
                value={form.date}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 outline-none"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Time Slot *</label>
              <select
                name="time"
                value={form.time}
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 outline-none"
              >
                <option value="">Select a time</option>
                {defaultSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+92 3XX XXXXXXX"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Project / Requirement *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows="5"
              placeholder="Tell me a bit about your project..."
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent p-3 outline-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#facc15] hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl shadow transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
          {loading ? "Please wait..." : "Book Now"}
          </button>
        </form>
      </div>

      {openConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1f1f1f] rounded-xl p-6 w-[95%] max-w-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Confirm Booking</h3>
            <ul className="space-y-1 text-[#374151] dark:text-[#d1d5db] mb-6">
              <li><strong>Service:</strong> {form.service}</li>
              <li><strong>Date:</strong> {form.date}</li>
              <li><strong>Time:</strong> {form.time}</li>
              <li><strong>Name:</strong> {form.name}</li>
              <li><strong>Email:</strong> {form.email}</li>
              {form.phone && <li><strong>Phone:</strong> {form.phone}</li>}
            </ul>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenConfirm(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-[#facc15] text-black font-semibold disabled:opacity-60"
              >
                {loading ? "Sending..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookService;
