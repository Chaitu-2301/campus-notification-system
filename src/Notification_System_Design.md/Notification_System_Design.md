# Campus Notification System Design

## Priority Logic

Notifications are prioritized using:

1. Notification Type Weight
   - Placement = 3
   - Result = 2
   - Event = 1

2. Timestamp
   - Latest notifications are shown first.

---

## Top 10 Notification Strategy

To efficiently maintain top 10 notifications:

- Min Heap / Priority Queue can be used.
- Time Complexity:
  - Insertion: O(log n)
  - Retrieval: O(1)

Only top 10 notifications are stored.

---

## Future Improvements

- Real-time updates using WebSockets
- Redis caching
- Kafka event streaming
- Read/Unread tracking
- User preference-based prioritization

---

## Scalability

The system can scale horizontally using:

- Stateless services
- Load balancing
- Distributed queues
