
export interface GetParams { 
  endPoint?: string;
  token?: string
}

export interface PostParams { 
  endPoint?: string;
  body: string | FormData;
  'Content-type'?: string;
}
