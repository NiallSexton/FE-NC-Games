import Reviews from './SingleReview';
import axios from 'axios';
import Categories from './Categories'
import { useEffect, useState } from 'react';
// import { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Button } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import ReviewCard from './ReviewCard';
import Footer from './Footer';

const Home = ({ user }) => {

    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [viewButton, setViewButton] = useState(false);
    
    const handleChange = (event) => {
        setViewButton(true);
    }
    
    useEffect(() => {
        axios
        .get('https://nialls-games-reviews-new.herokuapp.com/api/reviews')
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
       {/* <h2 className='welcome-message'>Welcome To Your Home Page</h2> */}
       
       <Categories reviews={reviews} setReviews={setReviews} setSelectedCategory={setSelectedCategory}/>

        <ReviewCard reviews = {reviews}/>
        
        <Footer/>
            </>
       )}
   
}

export default Home;