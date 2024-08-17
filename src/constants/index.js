export const apiHeaders = {
  Authorization: "bearer " + process.env.REACT_APP_TMDB_TOKEN,
  Accept: "application/json", // Add the Accept header for JSON
  "Content-Type": "application/json", // You can also specify the Content-Type if needed
};
