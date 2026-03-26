import api from "./api";

export async function predictSales(data) {
  const res = await api.post("/predict", {
    jumlah_penjualan: Number(data.jumlah_penjualan),
    harga: Number(data.harga),
    diskon: Number(data.diskon)
  });
  return res.data;
}