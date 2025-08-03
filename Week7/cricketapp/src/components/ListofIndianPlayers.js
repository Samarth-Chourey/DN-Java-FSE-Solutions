import React from 'react';

const ListofIndianPlayers = ({ players }) => {
  return (
    <ul>
      {players.map((item, index) => (
        <li key={index}>Mr. {item}</li>
      ))}
    </ul>
  );
};

export default ListofIndianPlayers;
