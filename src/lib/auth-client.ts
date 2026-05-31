import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL
});

// Add this line to export the helper functions
export const { signIn, signUp, useSession, signOut } = authClient