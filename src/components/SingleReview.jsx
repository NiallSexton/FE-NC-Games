import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import SignIn from './SignIn';

const SingleReview = ({user}) => {

const { review_id } = useParams()
const [singleReview, setSingleReview] = useState([]);
const [votes, setVotes] = useState(0);
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState("");

console.log(singleReview.votes);
console.log(votes);



const handleCommentSubmit = (event) => {

    event.preventDefault();

    console.log(user, newComment);

    axios
        .post(`https://nialls-games-reviews.herokuapp.com/api/reviews/${review_id}/comments`, {author: user, body: newComment});
}

const handleNewCommentChange = (event) => {

    setNewComment(event.target.value)

}


const handleVoteClick = () => {
    console.log(setVotes);

    setVotes((currentVotes) => {
        return currentVotes += 1;
        
    });

    axios
        .patch(`https://nialls-games-reviews.herokuapp.com/api/reviews/${review_id}`, {inc_votes: 1});
}




useEffect(()=> {
    axios
    .get(`https://nialls-games-reviews.herokuapp.com/api/reviews/${review_id}`)
    .then((response) => {
        setSingleReview(response.data.review)
        // console.log(response.data.review);
        setVotes(response.data.review.votes)

    
    })
    axios.get(`https://nialls-games-reviews.herokuapp.com/api/reviews/${review_id}/comments`)
    .then((response) => {
        // console.log(response);
        // console.log(response.data.rows);
        setComments(response.data.rows);
        console.log(comments)
    })
  }, []);
  
  return <>
  <div className="single-review-main">
    <div>
        <img id='singleReviewImage' src={singleReview.review_img_url}></img>
    </div>
        <li className='singleReviewList'>
        <p>Game ID: <b>{review_id}</b></p>
        <p>Name: <b>{singleReview.title}</b></p>
        <p>Category: <b>{singleReview.category}</b></p> 
        <p>Designer: <b>{singleReview.designer}</b></p>
        <p>Owner: <b>{singleReview.owner}</b></p>
        <p>Created at: <b>{singleReview.created_at}</b></p>
        <p>Number of votes: <b>{votes}</b></p>
        <p>Comments: <b>{singleReview.comment_count}</b></p>
        </li>
        <div className='GameDescription'>Game description: {singleReview.review_body}</div>
        <div>
            <button onClick={handleVoteClick}>Add your vote here!</button>
        </div>
        </div>
        <div className="game-comments"> <h2>Game Comments</h2>
            
            {comments.map((comment) => {
                return <div className="single-review-cards" key= {comment.comment_id}>
                    <div className="container">
                        
                            <p> Author: <b>{comment.author}</b> </p>
                            <p> {comment.body} </p>
                            <p> Votes: {comment.votes} </p>
                        
                    </div>
                </div>
                }
            )}
            
        </div>
        
            
        <div className="submit-comment">
        <form onSubmit={handleCommentSubmit}>

            <textarea value={newComment} onChange={handleNewCommentChange} id="new_comment" name="new_comment" rows="3" placeholder="Type your comment here"></textarea> 

            <input type="submit" value="Submit Comment!"></input>

        </form>
            
        </div>
        

  
    </>
    
}

export default SingleReview;