export interface LoginTypes {
  email: string;
  password: string;
}

export interface RegisterTypes {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface DetailUserTypes {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}
