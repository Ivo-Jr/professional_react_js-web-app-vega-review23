import React from 'react';

const Console = ({ consoleData }) => {
  return (
    <div>
      {consoleData && consoleData.map((data, index) => (
        <div key={index}>
          <p>{data.message}, {data.date}, {data.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Console;

