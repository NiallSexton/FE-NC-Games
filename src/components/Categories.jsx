import axios from 'axios';
import { useState, useEffect } from 'react';

const Categories = ({setSelectedCategory}) => {
   
    const [reviews, setReviews] = useState('');
    
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
      axios
      .get('https://nialls-games-reviews.herokuapp.com/api/reviews')
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
    }, []);


    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
      }
      

    return (
    <div>
        <div className="filter-container">
          <div>Filter by Category:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="hidden-roles">hidden-roles</option>
              <option value="dexterity">dexterity</option>
              <option value="strategy">strategy</option>
              <option value="deck-building">deck-building</option>
              <option value="push-your-luck">push-your-luck</option>
              <option value="engine-building">engine-building</option>
              <option value="roll-and-write">roll-and-write</option>
            </select>
          </div>
        </div>

      </div>)
    
}
export default Categories;