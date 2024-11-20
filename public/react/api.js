let apiURL;

if (process.env.NODE_ENV === "development") {
  apiURL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";
} else {
  // Production
  // Hardcoding the apiURL for this example. Ideally you'd have the api on something like https://api.hl-inventory-app.com in a real world scenario so the strings would be easier to concatenate
  apiURL = `https://hl-inventory-app-api.onrender.com/api`;
}

export default apiURL;
