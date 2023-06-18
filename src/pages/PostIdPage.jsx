import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import Comment from "../components/Comment";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchCommentById, isCommentLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id)
        console.log(response)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchCommentById()
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста с ID {params.id}</h1>
            {isLoading
                ? <Loader/>
                :  <div>{post.id}. {post.title}</div>
            }
            <h1 style={{paddingTop: 20}}>Комментарии</h1>
            {isCommentLoading
                ? <Loader/>
                : <Comment comments={comments} isLoading={isCommentLoading}/>
            }
        </div>
    );
};

export default PostIdPage;