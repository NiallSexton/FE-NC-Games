import{ useState, useEffect } from 'react';
import axios from 'axios';

const SignIn = ({ user, setUser }) => {

    const [loading, setLoading] = useState(true);
    const [userAPI, setUserAPI] = useState();

    useEffect(() => {
        axios
        .get('https://nialls-games-reviews-new.herokuapp.com/api/users')
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
        return <>
            <div className='sign-in'>
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
        <img id='sign-in-image' src='https://as2.ftcdn.net/v2/jpg/02/99/34/53/1000_F_299345334_G9l16Jrb17T1pd0MbXedRNA9CQrOLcjS.jpg'></img>
        </>
    }
}

export default SignIn;