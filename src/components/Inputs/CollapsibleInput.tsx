import React, {PropsWithoutRef} from 'react';

import CollapsibleInputContainer from './CollapsibleInputContainer';
import CheckBoxList from 'src/components/Inputs/CheckboxList';
import {Controller} from 'react-hook-form';
import {CollapsibleInputProps} from '@components/Inputs/Interfaces';

export default (props: PropsWithoutRef<CollapsibleInputProps>) => {
  const {control, value, onChange, name, rules} = props;
  return (
    <>
      {control ? (
        <Controller
          control={control}
          rules={rules}
          render={({field: {onChange, value}}) => (
            <CollapsibleInputContainer {...props} value={value}>
              <CheckBoxList {...props} value={value} onChange={onChange} />
            </CollapsibleInputContainer>
          )}
          name={name}
        />
      ) : (
        <>
          {onChange && (
            <CollapsibleInputContainer {...props} value={value}>
              <CheckBoxList {...props} value={value} onChange={onChange} />
            </CollapsibleInputContainer>
          )}
        </>
      )}
    </>
  );
};
