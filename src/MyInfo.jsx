import React, { useState } from 'react';
import './MyInfo.css';

function MyInfo() {
    // likes - the current state
    // setLikes - function to update this state
    const [likes, setLikes] = useState({
        japan: 0,
        italy: 0,
        newZealand: 0
    });

    const handleLike = (place) => {
        setLikes(prevLikes => ({
            // immutability - we never modify the original state object
            ...prevLikes,
            // use the value of the place variable as the property name
            [place]: prevLikes[place] + 1
        }));
    };

    return (
        <div className="personal-info-container">
            <div className="profile-header">
                <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Jane"
                    alt="profile picture"
                    className="profile-image"
                />
                <h1>Karina Chernobai</h1>
            </div>

            <p className="bio">
                I'm a student learning web development with React. I enjoy creating interactive
                user interfaces and learning new technologies. In my free time, I like to
                play tennis and write poetry.
            </p>

            <h2>Places I'd Like to Visit:</h2>

            <div className="places">
                {/* Japan Card */}
                <div className="place-card">
                    <img src="../public/images/places/japan.jpg" alt="Japan" className="place-image" />
                    <div className="place-info">
                        <h3>Japan</h3>
                        <p>To experience the unique blend of traditional culture and cutting-edge technology.</p>
                    </div>
                    <button
                        onClick={() => handleLike('japan')}
                        className="like-button"
                    >
                        👍 Like {likes.japan}
                    </button>
                </div>

                {/* Italy Card */}
                <div className="place-card">
                    <img src="../public/images/places/italy.jpg" alt="Italy" className="place-image" />
                    <div className="place-info">
                        <h3>Italy</h3>
                        <p>To discover its rich history, vibrant art, and the unforgettable local cuisine.</p>
                    </div>
                    <button
                        onClick={() => handleLike('italy')}
                        className="like-button"
                    >
                        👍 Like {likes.italy}
                    </button>
                </div>

                {/* New Zealand Card */}
                <div className="place-card">
                    <img src="../public/images/places/new-zealand.jpg" alt="New Zealand" className="place-image" />
                    <div className="place-info">
                        <h3>New Zealand</h3>
                        <p>To see the breathtaking landscapes that were featured in Lord of the Rings.</p>
                    </div>
                    <button
                        onClick={() => handleLike('newZealand')}
                        className="like-button"
                    >
                        👍 Like {likes.newZealand}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;