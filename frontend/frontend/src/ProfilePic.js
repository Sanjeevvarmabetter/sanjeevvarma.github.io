import React from "react";
import './ProfilePic.css';

function ProfilePic() {
    return (
        <div className="profile-picture-container">
        <img
        className="profile-picture"
        src="photo.jpg"
        alt ="Your Picture"
        />
        </div>
    );
};

export default ProfilePic;