import api from "./api";

export async function getSales() {
  const res = await api.get("/sales");
  return res.data;
}