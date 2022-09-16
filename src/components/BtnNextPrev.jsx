function BtnNextPrev({ label, onclick }) {
  return (
    <button
      className="text-white w-10 h-10 bg-slate-50/5 rounded-full hover:bg-slate-50/50"
      onClick={onclick}
    >
      {label}
    </button>
  );
}

export default BtnNextPrev;
