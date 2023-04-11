interface TierSquadProps {
  label: string;
  color: string;
}

export const TierSquad: React.FC<TierSquadProps> = ({ label, color }) => {

  return (
    <div
      className="rounded text-zinc-900 font-semibold w-20 h-20 text-2xl shadow-md flex justify-center items-center select-none"
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
};
