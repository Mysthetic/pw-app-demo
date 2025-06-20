import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Button
} from '@mui/material';
import type { User } from '../types/User';

interface Props {
  users: User[];
  checkedIds: number[];
  onCheck: (id: number) => void;
  onDetails: (user: User) => void;
}

export default function MyTable({ users, checkedIds, onCheck, onDetails }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Check</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Checkbox
                checked={checkedIds.includes(user.id)}
                onChange={() => onCheck(user.id)}
              />
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Button onClick={() => onDetails(user)}>Details</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
