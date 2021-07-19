import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUser } from '../features/counter/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import "./ProfileSceen.css";

function ProfileSceen() {
    const user = useSelector(selectUser);
    const history = useHistory();

    return (
        <div className="profileSceen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button
                                onClick={() => history.push("/")}
                                className="profileScreen__continue">
                                    Continue
                            </button>
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut">
                                    Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSceen;
