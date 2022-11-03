import{ useState, useEffect } from 'react';
import axios from 'axios';

const SignIn = ({ user, setUser }) => {

    const [loading, setLoading] = useState(true);
    const [userAPI, setUserAPI] = useState();

    useEffect(() => {
        axios
        .get('https://nialls-games-reviews.herokuapp.com/api/users')
        .then((response) => {
            setUserAPI(response.data.users);
            setLoading(false);
        })
    }, []);

    const handleChange = (event) => {
        setUser(event.target.value);
    };

    if (loading) {
        return <h3>Please wait, loading...</h3>
    } else {
        return (
            <div>
                <h3>Choose a profile to log in with</h3>
                <select value={user} onChange={handleChange}>
                    {userAPI.map((user) => {
                        return (
                            <option key={user.username} value={user.username}> {user.username}
                            </option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default SignIn;