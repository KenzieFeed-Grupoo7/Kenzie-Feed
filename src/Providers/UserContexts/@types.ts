export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  id: number;
}

export interface ILoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IUserContext {
  loading: boolean;
  loginSubmit: (formData: ILoginFormData) => Promise<void>;
  login: (formData: ILoginFormData) => Promise<void>;
  logout: () => void;
  user: IUser | null;
}
