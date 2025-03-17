interface ChampionsGridProps {
  children: React.ReactNode;
}

const ChampionsGrid = ({ children }: ChampionsGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {children}
    </div>
  );
};

export default ChampionsGrid;
