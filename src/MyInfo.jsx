import React from 'react';
import './MyInfo.css';

function MyInfo() {
    return (
        <div className="my-info-container">
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

            <div className="places-grid">
                <div className="place-card">
                    <img src="../public/images/places/japan.jpg" alt="Japan" className="place-image" />
                    <div className="place-info">
                        <h3>Japan</h3>
                        <p>To experience the unique blend of traditional culture and cutting-edge technology.</p>
                    </div>
                </div>

                <div className="place-card">
                    <img src="../public/images/places/italy.jpg" alt="Italy" className="place-image" />
                    <div className="place-info">
                        <h3>Italy</h3>
                        <p>For its incredible history, art, and of course, the amazing food.</p>
                    </div>
                </div>

                <div className="place-card">
                    <img src="../public/images/places/new-zealand.jpg" alt="New Zealand" className="place-image" />
                    <div className="place-info">
                        <h3>New Zealand</h3>
                        <p>To see the breathtaking landscapes that were featured in Lord of the Rings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyInfo;