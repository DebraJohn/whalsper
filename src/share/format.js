export function stringToJSON(data) {
  if (typeof data === 'string') {
    return JSON.parse(data.replace(/^callback\(/g, '').replace(/\)$/g, ''));
  }
  return data;
}
