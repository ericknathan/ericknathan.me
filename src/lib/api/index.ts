type ApiResponse<Payload> = {
  message: string;
  payload: Payload;
};

const { NEXT_PUBLIC_VERCEL_URL } = process.env;

const BASE_URL = `${NEXT_PUBLIC_VERCEL_URL}/api`;

export const api = {
  async get<ResponseType = any>(
    path: `/${string}`,
    props?: RequestInit
  ): Promise<ApiResponse<ResponseType>> {
    const response = await fetch(`${BASE_URL}${path}`, {
      ...props,
      method: "GET",
    })

    const data = await response.json();

    return data;
  },
};
