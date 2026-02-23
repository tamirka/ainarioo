import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_FILE = path.join(__dirname, "posts.json");
const UPLOADS_DIR = path.join(__dirname, "public", "uploads");

// Ensure uploads directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Initialize posts.json if it doesn't exist
if (!fs.existsSync(POSTS_FILE)) {
  fs.writeFileSync(POSTS_FILE, JSON.stringify([], null, 2));
}

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(UPLOADS_DIR));

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// API Routes
app.get("/api/posts", (req, res) => {
  const posts = JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8"));
  res.json(posts);
});

app.post("/api/posts", (req, res) => {
  const posts = JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8"));
  const newPost = {
    ...req.body,
    id: Date.now(),
    publishedDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
  posts.push(newPost);
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
  res.status(201).json(newPost);
});

app.put("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let posts = JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8"));
  const index = posts.findIndex((p: any) => p.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...req.body };
    fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
    res.json(posts[index]);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.delete("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let posts = JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8"));
  posts = posts.filter((p: any) => p.id !== id);
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
  res.status(204).send();
});

app.post("/api/upload", upload.single("image"), (req, res) => {
  if (req.file) {
    res.json({ url: `/uploads/${req.file.filename}` });
  } else {
    res.status(400).json({ message: "No file uploaded" });
  }
});

// Vite middleware for development
if (process.env.NODE_ENV !== "production") {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.join(__dirname, "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
