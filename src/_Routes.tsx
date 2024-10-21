import React, { Route, Routes } from 'react-router-dom';
import { IndexScreen, NotFoundScreen } from './screens/index';

const _Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexScreen />} />
      <Route path="/404" element={<NotFoundScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default _Routes;
