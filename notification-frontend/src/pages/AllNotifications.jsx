import { useEffect, useState } from "react";

import { Select, MenuItem, TextField, Button } from "@mui/material";

import NotificationCard from "../components/NotificationCard";

import { fetchNotifications } from "../services/api";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  const [type, setType] = useState("");

  const [limit, setLimit] = useState(5);

  useEffect(() => {
    loadNotifications();
  }, [type, limit]);

  const loadNotifications = async () => {
    const data = await fetchNotifications(1, limit, type);

    setNotifications(data);
  };

  return (
    <div>
      <br />

      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{
          minWidth: 200,
          marginRight: 2,
        }}
      >
        <MenuItem value="">All</MenuItem>

        <MenuItem value="Placement">Placement</MenuItem>

        <MenuItem value="Result">Result</MenuItem>

        <MenuItem value="Event">Event</MenuItem>
      </Select>

      <TextField
        type="number"
        label="Limit"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        sx={{ width: 120 }}
      />

      <Button
        variant="contained"
        sx={{ marginLeft: 2 }}
        onClick={loadNotifications}
      >
        Refresh
      </Button>

      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default AllNotifications;
