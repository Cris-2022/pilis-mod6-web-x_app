export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export interface Response<T = void> {
  isError: boolean;
  status: number;
  result?: T;
}

export function createJsonBodyOptions(body?: object): RequestInit {
  const headers = { 'Content-Type': 'application/json' };
  const _body = JSON.stringify(body);
  return { headers, body: _body };
}

export function createJsonBodyOptionsAuth(
  token: string,
  body?: object,
): RequestInit {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  if (!body) return { headers };
  const _body = JSON.stringify(body);
  return { headers, body: _body };
}

export function createFormDataOptionAuth(token: string, body?: FormData) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  if (!body) return { headers };

  return { headers, body };
}

export function createDataOptionAuth(token: string) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return { headers };
};
