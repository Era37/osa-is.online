const now = () => Math.round(Date.now() / 1000); // Unix seconds

const requestCount = new Map<string, { lastRequest: number; count: number }>();

const ratelimit = {
  requests: 1,
  per: 60, // seconds
};

export function isRatelimited(ip: string): boolean {
  const requested = requestCount.get(ip) || { lastRequest: now(), count: 0 };
  if (
    requested.count >= ratelimit.requests &&
    now() - requested.lastRequest < ratelimit.per
  ) {
    return true;
  }
  if (requested.count > ratelimit.requests) requested.count = 0;
  requestCount.set(ip, {
    lastRequest: now(),
    count: requested.count + 1,
  });
  return false;
}
