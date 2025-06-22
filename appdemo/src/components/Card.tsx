import { Card, CardContent, Typography, Box } from "@mui/material";
import type { User } from "../types/User";

interface Props {
  users: User[];
}

export default function MyCard({ users }: Props) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Total Users: {users.length}
        </Typography>
        <Box
          sx={{
            maxHeight: "3rem",
            overflowY: "auto",
          }}
        >
          {users.map((user) => (
            <Typography key={user.id}>{user.name}</Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
