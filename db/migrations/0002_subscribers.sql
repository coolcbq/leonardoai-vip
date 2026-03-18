-- Create subscribers table for newsletter subscriptions
CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TEXT
);

-- Index for quick email lookup
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
