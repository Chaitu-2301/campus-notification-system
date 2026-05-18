const logger = require("./logger");

async function fetchNotifications() {
  logger.info("Fetching notifications...");

  const notifications = [
    {
      id: 1,
      Type: "Placement",
      Message: "Google Hiring Drive",
      Timestamp: "2026-05-18T10:00:00",
    },
    {
      id: 2,
      Type: "Event",
      Message: "Coding Competition",
      Timestamp: "2026-05-17T09:00:00",
    },
    {
      id: 3,
      Type: "Result",
      Message: "Semester Result Published",
      Timestamp: "2026-05-18T08:00:00",
    },
    {
      id: 4,
      Type: "Placement",
      Message: "Amazon Internship",
      Timestamp: "2026-05-18T12:00:00",
    },
  ];

  logger.info("Notifications fetched successfully");

  return notifications;
}

module.exports = fetchNotifications;
