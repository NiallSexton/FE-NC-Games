import Reviews from './Reviews';
import axios from 'axios';
import Categories from './Categories'
import { useEffect, useState } from 'react';

const Home = ({ user }) => {
    console.log(user)

    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    
    useEffect(() => {
        axios
        .get('https://nialls-games-reviews.herokuapp.com/api/reviews')
        .then((response) => {
            if(selectedCategory) {
                const filteredReviews = response.data.filter((review) => {
                    
                    return review.category === selectedCategory;
                    
                })
                setReviews(filteredReviews);
            }
            else {
                setReviews(response.data)
            }
            
            setLoading(false);
        })
    }, [selectedCategory])

    if (loading) {
        return <h3>Please wait, loading...</h3>
    } else {return  (
        <>
       <h2>Welcome To Your Home Page</h2>
       <Categories reviews={reviews} setReviews={setReviews} setSelectedCategory={setSelectedCategory}/>
       <ul className='review-list'>
       {reviews.map((review, index) => {
                    return <div key = {review.review_id}>
                    <li>
                    Name:{review.title} Game ID:{review.review_id} Category:{review.category} Designer:{review.designer}
                        <div>
                            <img id='review-images' src={review.review_img_url}/>
                        </div>
                    </li></div>
                })}
       </ul>

            </>
       )}
   
}

export default Home;