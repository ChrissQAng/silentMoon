import express, { json, request } from "express";
import cors from "cors";
import multer from "multer";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieSession from "cookie-session";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000;
const isFrontendLocalhost =
  process.env.FRONTEND_URL.startsWith("http://localhost");
const cookieSessionSecret = process.env.COOKIE_SESSION_SECRET;

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.set("trust proxy", 1);
const cookieSessionOptions = {
  name: "session",
  secret: cookieSessionSecret,
  httpOnly: true,
  expires: new Date(Date.now() + twoWeeksInMs),
  sameSite: isFrontendLocalhost ? "lax" : "none",
  secure: isFrontendLocalhost ? false : true,
};
app.use(cookieSession(cookieSessionOptions));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("uploads"));

const upload = multer({ dest: "./uploads" });
app.post("/api/v1/files/upload", upload.single("files"), (req, res) => {
  res.json({ fileUrl: req.file.filename });
});

// *spotify stuff
const spotify_client_id = process.env.SPOTIFY_CLIEND_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIEND_SECRET;

app.get("/auth/login", (req, res) => {
  const scope =
    "streaming\
                user-read-email\
                user-read-private";

  const auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_url: "http://localhost:3000/auth/callback",
  });
  res.redirect(
    `https://accounts.spotify.com/authorize/?` +
      auth_query_parameters.toString(),
  );
});

app.get("/auth/callback", (req, res) => {
  const code = req.query.code;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: "http://localhost:3000/auth/callback",
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(spotify_client_id + ":" + spotify_client_secret).toString(
          "base64",
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };
  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.redirect("/");
    }
  });
});

app.get("/auth/token", (req, res) => {
  res.json({
    access_token: access_token,
  });
});

await mongoose.connect(process.env.MONGO_URL, { dbName: "SilentMoon" });
app.listen(PORT, () => console.log("Server ready at", PORT));
