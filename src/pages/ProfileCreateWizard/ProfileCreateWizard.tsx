import { FormContainer } from 'components';
import { Step1, Step2 } from '.';

import { useRecoilValue } from 'recoil';
import { profileCreateStep } from 'store';
import { ContainerLayout } from 'layouts';

const ProfileCreateWizard = () => {
  const step = useRecoilValue(profileCreateStep);

  const formsSteps = [<Step1 />, <Step2 />];

  return (
    <ContainerLayout className="h-noNav bg-blue-300 flex items-center justify-center">
      <FormContainer>
        <div className="p-6">
          <div className="text-lg font-bold">Create Profile</div>
          {formsSteps[step]}
        </div>
      </FormContainer>
    </ContainerLayout>
  );
};

export default ProfileCreateWizard;
