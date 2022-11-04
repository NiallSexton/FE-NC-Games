import Reviews from './SingleReview';
import axios from 'axios';
import Categories from './Categories'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
    console.log(user)

    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [viewButton, setViewButton] = useState(false);
    
    const handleChange = (event) => {
        console.log(event.currentTarget);
        setViewButton(true);
    }
    
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
       {reviews.map((review) => {
                    return <div key = {review.review_id}>
                    <li>
                    <p>Name:{review.title}</p>
                    <p>Game ID:{review.review_id}</p>
                    <p>Category:{review.category}</p>
                    <p>Designer:{review.designer}</p>
                        <div>
                           <Link to={`/reviews/${review.review_id}`}>  <img id='review-images' src={review.review_img_url}/></Link>
                        </div>
                            
                    </li></div>
                })}
       </ul>
            </>
       )}
   
}

export default Home;