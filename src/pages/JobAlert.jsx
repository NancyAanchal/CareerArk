import React, { useState } from "react";
import axios from "axios";

const JobAlert = () => {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/scrape?position=${position}&location=${location}`
      );

      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
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
            style={{
              flex: "1",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              outline: "none",
              boxShadow: "0 0 0 2px transparent",
              transition: "box-shadow 0.2s",
              "&:focus": { boxShadow: "0 0 0 2px #ff7c0a" },
            }}
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            style={{
              flex: "1",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              outline: "none",
              boxShadow: "0 0 0 2px transparent",
              transition: "box-shadow 0.2s",
              "&:focus": { boxShadow: "0 0 0 2px #ff7c0a" },
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: "#ff7c0a",
              color: "#fff",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s",
              "&:hover": { backgroundColor: "#ff6a00" },
            }}
          >
            Search Jobs
          </button>
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
          {jobs.length > 0 ? (
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
              No job results found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobAlert;
