import { ShortUrl } from "../models/ShortUrl.js";
import hash from "object-hash";

async function shortenUrl(req, res) {
  const { originalUrl } = req.body;

  const hashedUrl = hash(originalUrl);

  const shortUrl = new ShortUrl({
    originalUrl,
    hashedUrl,
  });
  await shortUrl.save();

  res.json({ shortUrl: `http://localhost:5000/api/${hashedUrl}` });
}

async function redirectUrl(req, res) {
  const { hash } = req.params;

  const shortUrl = await ShortUrl.findOne({ hashedUrl: hash });

  if (shortUrl) {
    shortUrl.clicks++;
    await shortUrl.save();
    res.redirect(shortUrl.originalUrl);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
}

export { shortenUrl, redirectUrl };
