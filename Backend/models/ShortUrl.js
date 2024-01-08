
import  mongoose from 'mongoose'

const shortUrlSchema = new mongoose.Schema({
  originalUrl: String,
  hashedUrl: String,
  clicks: { type: Number, default: 0 },
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

export   {ShortUrl};
