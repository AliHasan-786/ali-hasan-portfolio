export const labEntries = {
  "/labs/stancebench": "/labs/stancebench/index.html",
  "/labs/stancebench/": "/labs/stancebench/index.html",
};

export function resolveLabEntry(url = "") {
  const queryAt = url.indexOf("?");
  const path = queryAt < 0 ? url : url.slice(0, queryAt);
  const query = queryAt < 0 ? "" : url.slice(queryAt);
  return labEntries[path] ? labEntries[path] + query : null;
}
