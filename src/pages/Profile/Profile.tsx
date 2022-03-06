import * as React from 'react';
import useWhoAmI from 'hooks/useWhoAmI';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router';

import { profileState } from 'store';

const Profile = () => {
  const navigate = useNavigate();
  const { fetchWhoAmI } = useWhoAmI();
  const profile = useRecoilValue(profileState);

  // React.useEffect(() => {
  //   const asyncFunction = async () => {
  //     await fetchWhoAmI();
  //     if (!profile.id) navigate('/profile/create');
  //   };

  //   asyncFunction();
  //   // @ts-ignore react-hooks/exhaustive-deps
  // }, []);

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
};

export default Profile;
