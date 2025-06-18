export interface InputDataLogin { 
  email: string;
  password: string;
}

export interface DataType extends InputDataLogin { 
  access_token: string
}

export interface InputData { 
  email: string;
  password: string;
  name: string
}