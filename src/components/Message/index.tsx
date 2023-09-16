import React, { ReactNode } from 'react';

type CaseProps = {
  status: number | string;
  children: ReactNode;
  className?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Case: React.FC<CaseProps> = ({ status, children, className }) => {
  console.log(status);
  return <div className={className}>{children}</div>;
};

type MessageProps = {
  status: number | string;
  children: React.ReactNode;
};

const Message: React.FC<MessageProps> = ({ status, children }) => {
  let selectedCase: React.ReactNode = null;

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      const childStatus = child.props.status as number;
      if (childStatus === status) {
        selectedCase = child;
      }
    }
  });

  return <div>{selectedCase}</div>;
};

export { Message, Case };
