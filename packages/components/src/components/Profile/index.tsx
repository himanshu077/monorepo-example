import React from "react";
import SolidButton from "../SolidButton";

interface IProps {
  avatar: string;
  email: string;
  name: string;
  onLogout: () => void;
}

const Profile = ({ avatar, email, name, onLogout }: IProps) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="bg-white shadow-xl rounded-lg py-3 max-w-sm p-4">
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
          <div className="flex items-center justify-center mt-4">
            <SolidButton onClick={() => onLogout?.()} text="Logout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
