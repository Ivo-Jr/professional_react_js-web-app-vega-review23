import React from 'react';

export default function Console({ consoleData }) {
  return (
    <div>
      {consoleData.map((data, index) => (
        <div key={index}>
          <p>{data.date} {data.time} - {data.status}</p>
        </div>
      ))}
    </div>
  );
}