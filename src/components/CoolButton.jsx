import React from 'react';

const CoolButton = ({ label, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-gradient-to-tr font-semibold hover:border-zinc-500 hover:from-zinc-700 px-4 py-2 bg-gradient-to-tl from-zinc-950 to-zinc-900 border text-white rounded-xl shadow-lg transition-all ${
        isSelected ? 'underline border-zinc-400' : 'border-zinc-700'
      }`}
    >
      {label}
    </button>
  );
};

export default CoolButton;
