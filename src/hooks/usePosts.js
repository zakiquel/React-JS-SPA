import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    return useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
}

