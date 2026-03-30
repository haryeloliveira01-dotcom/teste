import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

app.get("/player/:tag", async (req, res) => {
  const tag = req.params.tag.replace("#", "%23");

  try {
    const response = await fetch(
      `https://api.brawlstars.com/v1/players/${tag}`,
      {
        headers: {
          Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjJlM2VjNGQwLWMwNDktNDhmYS05MGZkLTBkZmJiOTQ0OGYzMyIsImlhdCI6MTc3NDg3MjMzMywic3ViIjoiZGV2ZWxvcGVyLzY2ZDQ0NTkwLWI5YzAtZDA1Yy04MGYzLWI4Mjg4MjliNTM5OSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMC4wLjAuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.LjaW6ZysZEeWYwtPwDBP-xoJNt9NNO6mLaKqW-xBi8SIYy8WXkt2__6mjPoEg7djWhZweFFrgmH7rSQz7dnv6A"
        }
      }
    );

    const data = await response.json();
    res.json(data);

  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});
