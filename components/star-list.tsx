import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGithub from '../hooks/github';

const StarList = () => {
    const { stars, hasNextPage, fetchNextPage, isLoading } = useGithub();
    if (!stars?.length && isLoading) return <h3 className="p-5">loading...</h3>;
    return (
        <div className="max-h-full max-w-md overflow-auto p-5">
            <InfiniteScroll
                dataLength={stars.length}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<h3 className="bg-red-300">Loading...</h3>}
            >
                {stars?.map((star) => (
                    <div key={star.id}>
                        <a href={star.html_url}>{star.name}</a>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default StarList;
