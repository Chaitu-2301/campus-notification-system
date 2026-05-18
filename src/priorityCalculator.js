const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function sortNotifications(notifications) {
  return notifications.sort((a, b) => {
    const weightDifference = weights[b.Type] - weights[a.Type];

    if (weightDifference !== 0) {
      return weightDifference;
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });
}

module.exports = sortNotifications;
