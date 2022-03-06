import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { profileState } from 'store';

const Profile = () => {
  const profile = useRecoilValue(profileState);

  if (profile.id) {
    return (
      <div className="flex justify-center items-center h-noNav">
        <div className="p-6 lg:max-w-[500px]  bg-purple-500 text-white rounded">
          <div className="text-xl font-bold mb-4">Your Profile</div>
          {Object.keys(profile).map((attr, index) => {
            return (
              <div
                key={attr}
                className="flex space-x-4 items-center justify-between"
              >
                <div className="text-xs font-bold">{attr}</div>
                <div className="text-sm">{profile[attr]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Profile;
