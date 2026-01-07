// LazyMap.js
import React, { lazy, Suspense } from 'react';

const LazyMapContainer = lazy(() => import('react-leaflet').then(module => ({ default: module.MapContainer })));

const LazyMap = (props) => (
  <Suspense fallback={<div>Loading map...</div>}>
    <LazyMapContainer {...props} />
  </Suspense>
);

export default LazyMap;