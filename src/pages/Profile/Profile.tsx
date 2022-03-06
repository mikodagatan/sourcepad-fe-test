import * as React from 'react';
import useWhoAmI from './hooks/useWhoAmI';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router';

import { profileState } from 'store';

const Profile = () => {
  const navigate = useNavigate();
  const { fetchWhoAmI } = useWhoAmI();
  const profile = useRecoilValue(profileState);

  React.useEffect(() => {
    const asyncFunction = async () => {
      await fetchWhoAmI();
      if (!profile.id) navigate('/profile/create');
    };

    asyncFunction();
    // @ts-ignore react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Placeholder profile page
      {profile.id} {profile.firstName} {profile.lastName}
    </div>
  );
};

export default Profile;
