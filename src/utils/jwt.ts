export function getPayload(token: string) {
  const parts = token.split('.');
  return JSON.parse(atob(parts[1]));
}
