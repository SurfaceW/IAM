// --- IO ---
export function fetchData(storage = 'ls', query = 'data') {
  let dataSet = null;
  if (storage === 'ls') {
    const getItem = localStorage.getItem.bind(localStorage);
    try {
      dataSet = JSON.parse(getItem(query) || null);
    } catch (e) {
      console.error(e);
    }
  }
  return dataSet;
}

export function setData(storage = 'ls', name = 'data', data) {
  if (storage === 'ls') {
    try {
      localStorage.setItem(name, JSON.stringify(data || null));
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  return true;
}
