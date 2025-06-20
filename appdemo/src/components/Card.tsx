import { Card, CardContent, Typography } from '@mui/material';
import type { User } from '../types/User';


interface Props {
  users: User[];
}

export default function MyCard({ users }: Props) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Total Users: {users.length}</Typography>
        {users.slice(0, 2).map((user) => (
          <Typography key={user.id}>{user.name}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}
