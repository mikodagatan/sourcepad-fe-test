import { FormContainer } from 'components';
import { Step1, Step2 } from '.';

import { useRecoilValue } from 'recoil';
import { profileCreateStep, profileState } from 'store';

const ProfileCreateWizard = () => {
  const step = useRecoilValue(profileCreateStep);
  const profile = useRecoilValue(profileState);

  const formsSteps = [<Step1 />, <Step2 />];

  return (
    <div className="h-noNav bg-blue-300 flex items-center justify-center">
      <FormContainer>
        {Object.keys(profile).map((attr) => {
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
        <div className="p-6">{formsSteps[step]}</div>
      </FormContainer>
    </div>
  );
};

export default ProfileCreateWizard;
