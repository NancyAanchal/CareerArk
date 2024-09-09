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
      // Extract the jobs array from response data
      setJobs(response.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div>
      <h1>Job Alert</h1>
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
      <button onClick={handleSearch}>Search Jobs</button>
      <div>
        <h2>Job Results</h2>
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.datePosted}</p>
              <p>{job.description}</p>
            </div>
          ))
        ) : (
          <p>No job results found</p>
        )}
      </div>
    </div>
  );
};

export default JobAlert;
