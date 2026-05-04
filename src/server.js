import express from "express";
import router from "./routes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0";

// Buka untuk semua Origin sementara (agar aman saat dites/diakses)
app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());
app.use("/", router);

// Tambahkan variabel host di sini
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
