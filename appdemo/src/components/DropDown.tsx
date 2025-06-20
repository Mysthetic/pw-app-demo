import { Select, MenuItem, Typography } from '@mui/material';
import type { User } from '../types/User';

interface Props {
  users: User[];
  selectedUserId: number | string;
  onChange: (id: number | string) => void;
}

export default function DropDown({ users, selectedUserId, onChange }: Props) {
  return (
    <>
      <Typography>Select a User:</Typography>
      <Select
        fullWidth
        value={selectedUserId}
        onChange={(e) => onChange(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">None</MenuItem>
        {users.map((user) => (
          <MenuItem key={user.id} value={user.id}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
