const fetchNotifications = require("./notificationService");
const sortNotifications = require("./priorityCalculator");
const logger = require("./logger");

async function main() {
  const notifications = await fetchNotifications();

  logger.info("Fetched Notifications:");

  console.table(notifications);

  const sortedNotifications = sortNotifications(notifications);

  const top10 = sortedNotifications.slice(0, 10);

  logger.info("Top 10 Notifications:");

  console.table(top10);
}

main();
