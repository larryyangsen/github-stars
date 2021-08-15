import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const authHandler = NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    secret: process.env.SECRET,
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt(token, user, account, profile, isNew) {
            if (account) return { ...token, accessToken: account.accessToken };
            return token;
        },
    },
});

export default authHandler;
