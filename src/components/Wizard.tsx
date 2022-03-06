import * as React from 'react';

interface WizardProps {
  step?: number;
  children: React.ReactNode[];
  onSubmit: () => void;
}

const Wizard = ({ step = 0, children, onSubmit }) => {
  return children.forEach((child: React.ReactNode, index: number) => {
    if (index === step) return child;
  });
};

export default Wizard;
