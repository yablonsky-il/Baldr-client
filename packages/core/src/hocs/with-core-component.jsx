import React from 'react';

export const withCore = (CoreComponent, InnerComponent) => {
  const { coreProps } = InnerComponent;

  const Comp = compProps => (
    <CoreComponent {...coreProps} {...compProps.coreProps}>
      {propsFromCore => <InnerComponent {...propsFromCore} {...compProps} />}
    </CoreComponent>
  );

  return Comp;
};
