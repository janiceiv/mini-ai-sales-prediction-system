import api from "./api";

export async function login(username, password) {
  const res = await api.post("/login", {
    username,
    password,
  });
  return res.data.access_token;
}