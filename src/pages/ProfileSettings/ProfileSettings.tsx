import React from 'react'

const ProfileSettings = () => {
  return (
    <div>
      <div>
        <h2>Your account</h2>
        <button>Delete Account</button>
      </div>

      <h5>Porfile Picture</h5>
      <img />
      <form>
        <label>Username</label>
        <input />
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <button>Update</button>
      </form>
    </div>
  );
}

export default ProfileSettings
