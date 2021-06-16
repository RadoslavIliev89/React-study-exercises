import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPost = async() => {
    const response = await jsonPlaceHolder.get('/post');

    return {
        type: 'FETCH_POSTS'
    };
};