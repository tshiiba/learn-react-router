export type AuthUser = {
  id: string;
  email: string;
  displayName: string;
};

export type SignInInput = {
  username: string;
  password: string;
};

export interface AuthClient {
  getCurrentUser(): Promise<AuthUser | null>;
  signIn(input: SignInInput): Promise<AuthUser>;
  signOut(): Promise<void>;
}

export interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isPending: boolean;
  signIn(input: SignInInput): Promise<AuthUser>;
  signOut(): Promise<void>;
}
