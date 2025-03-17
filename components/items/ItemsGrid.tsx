interface ItemsGridProps {
  children: React.ReactNode;
}
const ItemsGrid = ({ children }: ItemsGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {children}
    </div>
  );
};

export default ItemsGrid;
