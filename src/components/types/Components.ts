import React from 'react';

export type RNComponent<T> = React.FC<T> & {
  defaultProps: Partial<T>;
};
