import React, { useState } from "react";
import axios from "axios";
import "../styles/jobAlert.css";

const JobAlert = () => {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("Australia");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const [jobs, setJobs] = useState([]);

  const handleSearch = async () => {
    setSearched(true);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://careerark.onrender.com/scrape?country=${country}&position=${position}&location=${location}`
        // `http://localhost:5000/scrape?country=${country}&position=${position}&location=${location}`
      );

      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        padding: "2rem",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        Job Alerts
      </h1>
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Enter any job and location of your choice
      </h4>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Job title"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />

          <select
            id="country"
            value={country}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Australia">Australia</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Hongkong">Hong Kong</option>
            <option value="India">India</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Newzealand">New Zealand</option>
            <option value="Philipines">Philipines</option>
            <option value="singapore">singapore</option>
            <option value="Spain">Spain</option>
            <option value="Thailand">Thailand</option>
            <option value="Unitedkingdom">United Kingdom</option>
            <option value="Unitedstates">United States</option>
          </select>

          <button onClick={handleSearch}>Search Jobs</button>
        </div>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          Job Results
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {loading ? (
            <p
              style={{
                gridColumn: "span 3",
                textAlign: "center",
                color: "#777",
              }}
            >
              ...Loading
            </p>
          ) : jobs && jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "box-shadow 0.2s",
                  "&:hover": { boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {job.title}
                </h3>
                <p style={{ color: "#333", marginBottom: "0.5rem" }}>
                  <strong>Company:</strong> {job.company}
                </p>
                <p style={{ color: "#333", marginBottom: "0.5rem" }}>
                  <strong>Location:</strong> {job.location}
                </p>
                <p style={{ color: "#777", marginBottom: "1rem" }}>
                  <strong>Date Posted:</strong> {job.datePosted}
                </p>
                <p style={{ color: "#333" }}>{job.description}</p>
                <button onClick={() => (window.location.href = job.link)}>
                  Explore
                </button>
              </div>
            ))
          ) : (
            <p
              style={{
                gridColumn: "span 3",
                textAlign: "center",
                color: "#777",
              }}
            >
              {searched ? "NO results found" : <span></span>}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobAlert;
