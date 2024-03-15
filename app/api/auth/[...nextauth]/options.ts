import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: { label: "Email", placeholder: "Enter email address" },
        //         password: { label: "Password", placeholder: "Enter password" },
        //     },
        //     async authorize(credentials, request) {
        //         if (!credentials || !credentials.email || !credentials.password) {
        //             return null;
        //             const user = users.find(item => item.email === credentials.email);
        //             if ((user?.password === credentials.password)) {
        //                 return user;
        //             }
        //             return null;
        //         }
        //     },
        // }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
}