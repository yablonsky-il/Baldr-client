import React from 'react';

export const withCore = (CoreComponent, InnerComponent) => {
  const { coreProps } = InnerComponent;

  return compProps => (
    <CoreComponent {...coreProps} {...compProps.coreProps}>
      {propsFromCore => <InnerComponent {...propsFromCore} {...compProps} />}
    </CoreComponent>
  );
};
