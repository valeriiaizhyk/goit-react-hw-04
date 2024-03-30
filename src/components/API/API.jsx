import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
export default async function fetchCards(query, page) {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "IiHelLjX0wwaeXlKBn4cZWMHhsQHZ5w0KH-PPIufh9U",
      query: query,
      page,
      per_page: 40,
      orientation: "landscape",
    },
  });
  return response.data.results;
}
