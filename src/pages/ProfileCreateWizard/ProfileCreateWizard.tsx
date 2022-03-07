import * as React from 'react';
import { FormContainer } from 'components';
import { Step1, Step2 } from '.';

import { useRecoilState } from 'recoil';
import { profileCreateStep } from 'store';
import { ContainerLayout } from 'layouts';

const ProfileCreateWizard = () => {
  const [step, setStep] = useRecoilState(profileCreateStep);

  const formsSteps = [<Step1 />, <Step2 />];

  React.useEffect(() => {
    // NOTE: set step to 0 when user is logged out.
    return setStep(0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
