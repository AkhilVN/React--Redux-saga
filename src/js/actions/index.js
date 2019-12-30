

export function getData(payload) {
  return { type: "DATA_REQUESTED", payload };
}
export function getDataDetail(ID) {
  return { type: "LOADED_DATA_DETAIL", payload:{ID} };
}
