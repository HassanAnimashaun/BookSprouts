import React from 'react';

export default function ProgressBar() {
  const currentVal = 50;
  const maxVal = 100;

  return (
    <div>
      <progress value={currentVal} max={maxVal} className="rounded-lg">
        {currentVal}%
      </progress>
      <p>{currentVal}</p>
    </div>
  );
}
