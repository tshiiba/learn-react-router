import type { AuthClient, AuthUser, SignInInput } from "~/auth/types/auth";

export const MOCK_AUTH_USERNAME = "test-user@example.com";
export const MOCK_AUTH_PASSWORD = "TestPass123!";

const MOCK_USER: AuthUser = {
  id: "mock-user-001",
  email: MOCK_AUTH_USERNAME,
  displayName: "Test User",
};

let currentUser: AuthUser | null = null;

function delay(durationMs: number) {
  return new Promise((resolve) => window.setTimeout(resolve, durationMs));
}

export const mockAuthClient: AuthClient = {
  async getCurrentUser() {
    await delay(120);
    return currentUser;
  },
  async signIn({ username, password }: SignInInput) {
    await delay(240);

    if (username !== MOCK_AUTH_USERNAME || password !== MOCK_AUTH_PASSWORD) {
      throw new Error("ユーザー名またはパスワードが正しくありません。");
    }

    currentUser = {
      ...MOCK_USER,
      email: username,
    };

    return currentUser;
  },
  async signOut() {
    await delay(120);
    currentUser = null;
  },
};
