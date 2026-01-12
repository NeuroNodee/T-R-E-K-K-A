"use client";
import { useState } from "react";

export default function SherpaRegister({ handleRegister, onSuccess }) {
  const [form, setForm] = useState({
    experience_years: "",
    languages: "",
    region: "",
    daily_rate: "",
    phone: "",
    is_available: false,
    photo: null,
    nid_document: null,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);
    setSuccess(null);

    const token = localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
    if (!token) {
      setErrors({ error: "Please login first" });
      setLoading(false);
      return;
    }

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (v !== null && v !== undefined) fd.append(k, v);
    });

    try {
      const res = await fetch("http://127.0.0.1:8000/sherpa/register/", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Registration submitted! Awaiting verification.");
        onSuccess();
        setTimeout(() => handleRegister(), 2200);
      } else {
        setErrors(data);
      }
    } catch (err) {
      setErrors({ error: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg-overlay">
      <div className="reg-modal">
        <button className="reg-close-btn" onClick={handleRegister}>×</button>

        <h1 className="reg-title">Become a Certified Guide</h1>

        {success && <div className="form-success">{success}</div>}
        {errors && (
          <div className="form-errors">
            {Object.entries(errors).map(([key, val]) => (
              <div key={key}>
                <strong>{key}:</strong> {Array.isArray(val) ? val.join(", ") : val}
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="reg-form">
          <input type="number" placeholder="Experience (years)" onChange={e => handleChange("experience_years", e.target.value)} className="reg-input" required />
          <input placeholder="Languages (comma separated)" onChange={e => handleChange("languages", e.target.value)} className="reg-input" required />
          <input placeholder="Primary Region" onChange={e => handleChange("region", e.target.value)} className="reg-input" required />
          <input type="number" placeholder="Daily Rate (NPR)" onChange={e => handleChange("daily_rate", e.target.value)} className="reg-input" required />
          <input placeholder="Phone Number" onChange={e => handleChange("phone", e.target.value)} className="reg-input" required />

          <div className="file-upload-group">
            <label htmlFor="reg-photo">Profile Photo</label>
            <input id="reg-photo" type="file" accept="image/*" onChange={e => handleChange("photo", e.target.files[0])} className="file-input-styled" required />
          </div>

          <div className="file-upload-group">
            <label htmlFor="reg-nid">Government ID / NID</label>
            <input id="reg-nid" type="file" onChange={e => handleChange("nid_document", e.target.files[0])} className="file-input-styled" required />
          </div>

          <label className="reg-checkbox">
            <input type="checkbox" checked={form.is_available} onChange={e => handleChange("is_available", e.target.checked)} />
            Currently available for guiding
          </label>

          <button type="submit" disabled={loading} className={`reg-submit ${loading ? 'loading' : ''}`}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}