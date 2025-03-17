interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h2 className="text-xl font-extrabold text-primary mb-4">{children}</h2>
  );
};

export default PageTitle;
