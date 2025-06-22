import { useEffect, useState } from "react";
import { Typography, Box, Container } from "@mui/material";
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
    api
      .get("/user")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Failed to load users", err));
  }, []);

  const handleCheckboxChange = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    console.log('checked')
  };

  const handleDetails = (user: User) => {
    setModalUser(user);
    setOpen(true);
    console.log('Open Modal')
  };

  const filteredUsers =
    selectedUserId === ""
      ? users
      : users.filter((u) => u.id === selectedUserId);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container
        maxWidth="lg"
        sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 3, paddingY: 4, width: 400 }}
      >
        <Typography variant="h4" color="black" gutterBottom align="center">
          My Data Display
        </Typography>

        <MyCard users={users} />

        <Box my={2}>
          <DropDown
            users={users}
            selectedUserId={selectedUserId}
            onChange={(id) => setSelectedUserId(id)}
          />
        </Box>

        <Typography variant="h5" color="black" gutterBottom align="center">
          Users
        </Typography>

        <MyTable
          users={filteredUsers}
          checkedIds={checkedIds}
          onCheck={handleCheckboxChange}
          onDetails={handleDetails}
        />

        <MyModal open={open} user={modalUser} onClose={() => setOpen(false)} />
      </Container>
    </Box>
  );
}
