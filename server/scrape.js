const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const countryCodes = {
  australia: "au",
  bangladesh: "bd",
  brazil: "br",
  canada: "ca",
  france: "fr",
  hongkong: "hk",
  india: "in",
  malaysia: "my",
  newzealand: "nz",
  philippines: "ph",
  singapore: "sg",
  spain: "es",
  thailand: "th",
  unitedkingdom: "uk",
  unitedstates: "us",
};

app.get("/scrape", async (req, res) => {
  const { country, position, location } = req.query;

  const countryCode = countryCodes[country.toLowerCase()];

  try {
    const response = await axios.request({
      method: "GET",
      url: `https://${countryCode}.jora.com/j?sp=search&trigger_source=serp&q=${encodeURIComponent(
        position
      )}&l=${encodeURIComponent(location)}`,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0",
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);

    const jobs = [];
    $(".job-card").each((i, element) => {
      const title = $(element).find(".job-title a").text().trim();
      const company = $(element).find(".job-company").text().trim();
      const location = $(element).find(".job-location").text().trim();
      const datePosted = $(element).find(".job-listed-date").text().trim();
      const description = $(element)
        .find(".job-abstract li")
        .map((i, el) => $(el).text().trim())
        .get()
        .join(" | ");
      const link = $(element).find(".job-title a").attr("href");

      jobs.push({
        title,
        company,
        location,
        datePosted,
        description,
        link: `https://${countryCode}.jora.com${link}`,
      });
    });

    res.json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).send("Error fetching jobs");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
