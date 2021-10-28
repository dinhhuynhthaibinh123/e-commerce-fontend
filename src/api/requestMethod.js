import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzg1MDk0NDRjYmI2OWUwMjA2MWUwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQ0NzQ2OCwiZXhwIjoxNjM1NzA2NjY4fQ.ZYwGxmjvkKwIU7XQWMUlRjJSryLX8_Km2k9DaHVExDg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
