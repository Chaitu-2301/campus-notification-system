import { Card, CardContent, Typography, Chip } from "@mui/material";

function NotificationCard({ notification }) {
  const viewed = localStorage.getItem(notification.id);

  return (
    <Card
      sx={{
        marginTop: 2,
        backgroundColor: viewed ? "#f5f5f5" : "#e3f2fd",
      }}
    >
      <CardContent>
        <Typography variant="h6">{notification.Type}</Typography>

        <Typography>{notification.Message}</Typography>

        <Typography>{notification.Timestamp}</Typography>

        <Chip
          label={viewed ? "Viewed" : "New"}
          color={viewed ? "default" : "primary"}
        />
      </CardContent>
    </Card>
  );
}

export default NotificationCard;
