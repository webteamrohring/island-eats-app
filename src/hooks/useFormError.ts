import React, {useEffect} from 'react';

export default (isValidating, errors) => {
  return useEffect(() => {
    (async () => {
      if (!isValidating && errors) {
        const error = Object.values(errors)[0];

        if (error) {
          console.log(error.message);
        }
      }
    })();
  }, [isValidating]);
};
