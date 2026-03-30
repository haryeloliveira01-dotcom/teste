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
          Authorization: "Bearer SUA_API_KEY"
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
