import React, { useState } from 'react';

const useI18n = () => {
  const [country, setCountry] = useState('CH');

  return { country };
};

export default useI18n;
