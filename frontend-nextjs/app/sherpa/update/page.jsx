"use client";
import { useEffect, useState } from "react";

export default function SherpaUpdate({ handleUpdate, onSuccess }) {
  const [form, setForm] = useState({
    experience_years: "",
    languages: "",
    region: "",
    daily_rate: "",
    phone: "",
    is_available: false,
    photo: null,
    nid_document: null,
    current_nid: null,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("access_token") || sessionStorage.getItem("access_token"));
    }
  }, []);

  useEffect(() => {
    if (!token) return;

    fetch("http://127.0.0.1:8000/sherpa/me/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.ok ? res.json() : {})
      .then(data => {
        setForm({
          experience_years: data.experience_years || "",
          languages: data.languages || "",
          region: data.region || "",
          daily_rate: data.daily_rate || "",
          phone: data.phone || "",
          is_available: !!data.is_available,
          photo: null,
          nid_document: null,
          current_nid: data.nid_document || null,
        });
      })
      .catch(console.error);
  }, [token]);

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);
    setSuccess(null);

    if (!token) {
      setErrors({ error: "Authentication required" });
      setLoading(false);
      return;
    }

    const fd = new FormData();
    if (form.photo) fd.append("photo", form.photo);
    if (form.nid_document) fd.append("nid_document", form.nid_document);

    fd.append("experience_years", form.experience_years);
    fd.append("languages", form.languages);
    fd.append("region", form.region);
    fd.append("daily_rate", form.daily_rate);
    fd.append("phone", form.phone);
    fd.append("is_available", form.is_available ? "true" : "false");

    try {
      const res = await fetch("http://127.0.0.1:8000/sherpa/update/", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Profile successfully updated!");
        onSuccess(data);
        setTimeout(() => handleUpdate(), 1800);
      } else {
        setErrors(data);
      }
    } catch (err) {
      setErrors({ error: "Connection error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upd-overlay">
      <div className="upd-modal">
        <button className="upd-close-btn" onClick={handleUpdate}>×</button>

        <h1 className="upd-title">Update Guide Profile</h1>

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

        <form onSubmit={handleSubmit} className="upd-form">
          <input type="number" placeholder="Experience (years)" value={form.experience_years} onChange={e => handleChange("experience_years", e.target.value)} className="upd-input" required />
          <input placeholder="Languages (comma separated)" value={form.languages} onChange={e => handleChange("languages", e.target.value)} className="upd-input" required />
          <input placeholder="Preferred Region" value={form.region} onChange={e => handleChange("region", e.target.value)} className="upd-input" required />
          <input type="number" placeholder="Daily Rate (NPR)" value={form.daily_rate} onChange={e => handleChange("daily_rate", e.target.value)} className="upd-input" required />
          <input placeholder="Phone Number" value={form.phone} onChange={e => handleChange("phone", e.target.value)} className="upd-input" required />

          <div className="file-upload-group">
            <label htmlFor="upd-photo">Profile Photo (optional)</label>
            <input id="upd-photo" type="file" accept="image/*" onChange={e => handleChange("photo", e.target.files[0])} className="file-input-styled" />
          </div>

          {form.current_nid && (
            <div className="current-doc">
              <span>Current NID:</span>
              <a href={form.current_nid} target="_blank" rel="noopener noreferrer">View Document</a>
            </div>
          )}

          <div className="file-upload-group">
            <label htmlFor="upd-nid">NID Document (optional)</label>
            <input id="upd-nid" type="file" onChange={e => handleChange("nid_document", e.target.files[0])} className="file-input-styled" />
          </div>

          <label className="upd-checkbox">
            <input type="checkbox" checked={form.is_available} onChange={e => handleChange("is_available", e.target.checked)} />
            Available for bookings
          </label>

          <button type="submit" disabled={loading} className={`upd-submit ${loading ? 'loading' : ''}`}>
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}