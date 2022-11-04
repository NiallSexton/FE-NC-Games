import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

const SingleReview = () => {
console.log(useParams());


const { review_id } = useParams()
const [singleReview, setSingleReview] = useState([]);


useEffect(()=> {
    axios
    .get(`https://nialls-games-reviews.herokuapp.com/api/reviews/${review_id}`)
    .then((response) => {
        console.log(response);
        setSingleReview(response.data.review, '<----')
    //   setSingleReview(response.data);
    
    })
  }, []);

  return <>
    <div>
        <img id='singleReviewImage' src={singleReview.review_img_url}></img>
    </div>
        <ul className='singleReviewList'>
        <p>Game ID: {review_id}</p>
        <p>Name: {singleReview.title}</p>
        <p>Category: {singleReview.category}</p> 
        <p>Designer: {singleReview.designer}</p>
        <p>Owner: {singleReview.owner}</p>
        <p>Created at: {singleReview.created_at}</p>
        <p>Number of votes: {singleReview.votes}</p>
        <p>Comments: {singleReview.comment_count}</p>
        </ul>
        <div>Game description: {singleReview.review_body}</div>
    
  
    </>
    
}

export default SingleReview;