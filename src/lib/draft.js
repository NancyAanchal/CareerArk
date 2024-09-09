import axios from "axios";
import { load } from "cheerio";

async function getJobs(position, location) {
  try {
    // Construct the Indeed URL based on position and location
    const url = `https://au.jora.com/j?sp=search&trigger_source=serp&q=${encodeURIComponent(
      position
    )}&l=${encodeURIComponent(location)}`;
    const { data } = await axios.get(url);

    // Load the HTML into Cheerio
    const $ = load(data);
    const jobs = [];

    // Scrape job details (title, company, location, summary)
    $("h2.job.title").each((i, element) => {
      const title = $(element).text();
      const info = $(element).siblings("div.job.info").text(); // Adjust if needed
      const badges = $(element).siblings("div.badges").text(); // Adjust if needed

      jobs.push({
        title,
        info,
        badges,
      });
    });

    return jobs;
    // console.log(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

export default getJobs;
