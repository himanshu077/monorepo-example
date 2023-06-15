import React from "react";

interface IProps {
  avatar: string;
  email: string;
  name: string;
}

const Profile = ({ avatar, email, name }: IProps) => {
  return (
    <div className="bg-white shadow-xl rounded-lg py-3 w-40 mx-auto">
      <div className="photo-wrapper p-2">
        <img
          className="w-20 h-20 rounded-full mx-auto"
          src={avatar}
          alt="Profile photo"
        />
      </div>
      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
          {name}
        </h3>
        <h3 className="text-center text-base text-gray-900 font-medium leading-8">
          Email -{" "}
          <a className="text-blue-900" href={`mailto://${email}`}>
            {email}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Profile;