import { TextField, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function FormPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
  if (!name.trim()) {
    alert("Please enter your name.");
    return;
  }

  try {
    await api.post("/user", { name });
    console.log('Name submit successfuly!')
    alert("Submitted!");
    navigate("/data");
  } catch (error) {
    console.error("Failed to submit:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth="400px"
        p={4}
        boxShadow={3}
        borderRadius={2}
        bgcolor="white"
      >
        <Typography variant="h5" color="black" gutterBottom>
          Enter your name
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ my: 2 }}
        />
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
