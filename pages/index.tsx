import { signIn, signOut, useSession } from 'next-auth/client';

const Page = () => {
    const [session, loading] = useSession();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {!session && (
                <p>
                    You are not signed in. <button onClick={() => signIn()}>Sign In</button>
                </p>
            )}
            {session && (
                <p>
                    Signed in as {session.user.name}
                    <button onClick={() => signOut()}>Sign Out</button>
                </p>
            )}
        </>
    );
};

export default Page;
