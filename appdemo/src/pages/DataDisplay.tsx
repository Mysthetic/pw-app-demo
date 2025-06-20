import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import api from "../services/api";
import MyCard from "../components/Card";
import DropDown from "../components/DropDown";
import MyTable from "../components/Table";
import MyModal from "../components/Modal";
import type { User } from "../types/User";

export default function DataDisplay() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | string>("");
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [open, setOpen] = useState(false);
  const [modalUser, setModalUser] = useState<User | null>(null);

  useEffect(() => {
    api.get('/user')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Failed to load users', err));
  }, []);

  const handleCheckboxChange = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDetails = (user: User) => {
    setModalUser(user);
    setOpen(true);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        My Data Display
      </Typography>

      <MyCard users={users} />
      <DropDown
        users={users}
        selectedUserId={selectedUserId}
        onChange={setSelectedUserId}
      />
      <Typography variant="h4" gutterBottom>Users</Typography>
      <MyTable
        users={users}
        checkedIds={checkedIds}
        onCheck={handleCheckboxChange}
        onDetails={handleDetails}
      />
      <MyModal open={open} user={modalUser} onClose={() => setOpen(false)} />
    </div>
  );
}
