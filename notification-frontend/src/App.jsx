import { Container, Typography } from "@mui/material";

import AllNotifications from "./pages/AllNotifications";

function App() {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        Campus Notifications
      </Typography>

      <AllNotifications />
    </Container>
  );
}

export default App;
