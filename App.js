import React from 'react';
import DataContext from './app/context/DataContext';
import Navigation from './app/navigations/Navigation';



 function App() {
  return (
    <Navigation></Navigation>
  );
}

export default () => {
  return (
    <DataContext>
      <App />
    </DataContext>
  );
};

