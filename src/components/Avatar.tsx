import CyanideAvatar1 from 'assets/images/cyanide-avatar1.jpeg';
import CyanideAvatar2 from 'assets/images/cyanide-avatar2.png';
import { sample } from 'lodash';

const Avatar = () => {
  const randomAvatar = () => {
    const avatars = [CyanideAvatar1, CyanideAvatar2];
    return sample(avatars);
  };

  return (
    <div className="border-[4px] border-blue-400 rounded-full">
      <img
        src={randomAvatar()}
        alt="Avatar"
        className="rounded-full h-10 w-10"
      />
    </div>
  );
};

export default Avatar;
