export function extractExistingParams(searchParams) {
  const entries = Array.from(searchParams.entries());
  return entries.reduce(
    (acc, curr) => ((acc[curr[0]] = (acc[curr[0]] || '').concat(curr[1])), acc),
    {}
  );
}
