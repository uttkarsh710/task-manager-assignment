const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/tasks", require("./routes/taskRoutes"));

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
app.use(
  "/api/v1/tasks",
  require("./routes/taskRoutes")
);