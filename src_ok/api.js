const url = "https://api.coincap.io/v2";

// funciones que usaran fetch para interactuar con esta api
function getAssets() {
  // solo nos traemos la info de 20 monedas, devuelve una promesa
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json()) //otra promesa en formato json
    .then((res) => res.data); //el objeto con la info de las monedas
}

function getAsset(coin) {
  // vamos al valor de la moneda coin
  return fetch(`${url}/assets/${coin}`)
  .then((res) => res.json())
  .then((res) => res.data);
}

function getAssetHistory (coin) {
  const now = new Date()
  const end = now.getTime()
  //dia anterior
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  //intervalo cada hora
  return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
  .then((res) => res.json())
  .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory
};
