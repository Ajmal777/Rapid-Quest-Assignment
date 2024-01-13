import React from "react";

const Profile = ({ avatar, name }) => {
    const profileStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    }
    const introStyles = {
        display: 'flex',
        flexDirection: 'column',
    }
    const avatarStyles = {
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '-3px 3px 20px 3px #d8d8d8',
    }
    return (
        <div className="profile-wrapper" style={profileStyles}>
            <div className="avatar" style={avatarStyles}>
                <img style={{ width: "100%", height: "100%", objectFit: 'cover' }} src={avatar} />
            </div>
            <div className="intro" style={introStyles}>
                <span style={{ fontFamily: 'var(--heading-font)', color: "#262627", fontSize: '1.5rem', fontWeight: 500 }}>Hi {name},</span>
                <span style={{ color: "#424243", fontSize: '0.9rem' }}>welcome back.</span>
            </div>
        </div>
    );
};

export default Profile;
