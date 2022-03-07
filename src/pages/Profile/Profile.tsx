import { useRecoilValue } from 'recoil';
import { omit } from 'lodash';

import { ContainerLayout } from 'layouts';
import { FormContainer } from 'components';

import { profileState } from 'store';

const Profile = () => {
  const profile = useRecoilValue(profileState);

  const profileItems = omit(profile, [
    'id',
    'userId',
    'createdAt',
    'updatedAt',
  ]);

  if (profile.id) {
    return (
      <ContainerLayout className="h-noNav">
        <FormContainer className="min-w-[200px] sm:min-w-[400px] md:max-w-[500px]">
          <div className="p-6  bg-purple-500 text-white rounded">
            <div className="text-xl font-bold mb-4">Your Profile</div>
            <table className="w-full">
              <tbody>
                {Object.keys(profileItems).map((attr) => {
                  return (
                    <tr key={attr}>
                      <td className="text-xs font-bold">{attr}</td>
                      <td className="text-sm pl-6 text-right">
                        {profileItems[attr]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </FormContainer>
      </ContainerLayout>
    );
  }

  return <div></div>;
};

export default Profile;
