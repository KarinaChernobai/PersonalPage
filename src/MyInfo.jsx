import React from 'react';
import './MyInfo.css'; // We'll create this CSS file next

function MyInfo() {
    return (
        <div className="my-info-container">
            <h1>Karina Chernobai</h1>

            <p className="bio">
                I'm a student learning web development with React. I enjoy creating interactive
                user interfaces and learning new technologies. In my free time, I like to
                play tennis and write poetry.
            </p>

            <h2>Places I'd Like to Visit:</h2>
            <ul className="places-list">
                <li>
                    <strong>Japan</strong> - To experience the unique blend of traditional
                    culture and cutting-edge technology.
                </li>
                <li>
                    <strong>Italy</strong> - For its incredible history, art, and of course,
                    the amazing food.
                </li>
                <li>
                    <strong>New Zealand</strong> - To see the breathtaking landscapes that
                    were featured in Lord of the Rings.
                </li>
            </ul>
        </div>
    );
}

export default MyInfo;