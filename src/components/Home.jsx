import Reviews from './Reviews';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = ({ user }) => {
    console.log(user)

    const [reviews, setReviews] = useState('')
    const [loading, setLoading] = useState(true);;
    
    useEffect(() => {
        axios
        .get('https://nialls-games-reviews.herokuapp.com/api/reviews')
        .then((response) => {
            console.log(response.data);
            setReviews(response.data);
            setLoading(false);
            // console.log(response.data);
        })
    }, [])
    // console.log(reviews)s

    if (loading) {
        return <h3>Please wait, loading...</h3>
    } else {return  (
        <>
       <h2>Welcome To Your Home Page</h2>
       <ul className='review-list'>
       {reviews.map((review) => {
        // console.log(review);
                    return <div className='review-list-ol'>
                    <ol key = {review.review_id}>
                    Name:{review.title} Game ID:{review.review_id} Category:{review.category} Designer:{review.designer}
                        <div>
                            <img id='review-images' src={review.review_img_url}/>
                        </div>
                    </ol></div>
                })}
       </ul>
       <div className='home-buttons'>
       <button>Reviews</button>
        <button>Categories</button>
       </div>
            <Reviews />
            </>
       )}
   
}

export default Home;