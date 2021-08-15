import { useInfiniteQuery } from 'react-query';
import { useEffect, useState } from 'react';
const useGithub = () => {
    const [stars, setStars] = useState([]);
    const { data, hasNextPage, fetchNextPage, isLoading,  } = useInfiniteQuery(
        'github',
        async ({ pageParam = 1 }) => {
            const data = await fetch(`/api/github?page=${pageParam}`).then((response) => response.json());
            return {
                data,
                pageParam: pageParam + 1,
            };
        },
        {
            getNextPageParam: ({ data, pageParam }) => {
                const hasNext = data.length === 50;
                return hasNext ? pageParam : false;
            },
        }
    );
    useEffect(() => {
        if (!data) return;
        setStars((data.pages.map((p) => [...p.data]) ?? []).flat());
    }, [data]);

    return { stars, hasNextPage, fetchNextPage, isLoading };
};
export default useGithub;
