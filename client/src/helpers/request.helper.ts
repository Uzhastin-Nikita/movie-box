export const getRequestOptions = <T>(method: RequestMethod, body?: T) => {
  const params = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  if (method === RequestMethod.POST || method === RequestMethod.PUT || method === RequestMethod.DELETE) {
    return {
      ...params,
      body: JSON.stringify(body),
    }
  }

  return params
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const fetchJson = async <Props, Result>(url: string, method: RequestMethod, body?: Props): Promise<Result> => {
  try {
    const response = await fetch(url, getRequestOptions(method, body ?? null))
    const result = await response.json()

    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}
