type CustomOptions = RequestInit & {
  baseUrl?: string | undefined;
};

class HttpError extends Error {
  status: number;
  payload: any;
  constructor({ status, payload }: { status: number; payload: any }) {
    super();
    this.name = "HttpError";
    this.status = status;
    this.payload = payload;
  }
}

export const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  option?: CustomOptions,
) => {
  const body = option?.body ? JSON.stringify(option.body) : undefined;
  const baseHeaders = {
    "Content-Type": "application/json",
  };
  //nếu không truyền baseUrl thì lấy từ .env
  const baseUrl =
    option?.baseUrl === undefined
      ? process.env.NEXT_PUBLIC_API_URL
      : option.baseUrl;

  const fullUrl = url.startsWith("/")
    ? `${baseUrl}${url}`
    : `${baseUrl}/${url}`;
  const res = await fetch(fullUrl, {
    method,
    headers: {
      ...baseHeaders,
      ...option?.headers,
    },
    body,
  });

  const contentType = res.headers.get("content-type");
  let payload: Response | any;
  if (contentType && contentType.includes("application/json")) {
    payload = await res.json();
  } else {
    payload = await res.text(); // Parse as text if not JSON
  }

  const data = {
    status: res.status,
    payload,
  };

  if (!res.ok) {
    throw new HttpError(data);
  }
  return data;
};

const fetcher = {
  get: <Response>(
    url: string,
    options?: Omit<CustomOptions, "body"> | undefined,
  ) => request<Partial<Response>>("GET", url, options),
  post: <Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined,
  ) => request<Partial<Response>>("POST", url, { ...options, body }),
  put: <Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined,
  ) => request<Partial<Response>>("PUT", url, { ...options, body }),
  delete: <Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, "body"> | undefined,
  ) => request<Partial<Response>>("DELETE", url, { ...options, body }),
};

export default fetcher;
