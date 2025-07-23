const Header = ({
  title,
  subtitle,
  ...props
}: {
  title: string;
  subtitle?: string;
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <header className="text-center p-4" {...props}>
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="text-lg">{subtitle}</p>}
    </header>
  );
};

export default Header;
