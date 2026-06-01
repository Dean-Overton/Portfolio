const Header = ({
  title,
  subtitle,
  level = 1,
  ...props
}: {
  title: string;
  subtitle?: string;
  level?: 1 | 2;
} & React.HTMLAttributes<HTMLElement>) => {
  const Tag = level === 2 ? "h2" : "h1";
  return (
    <header className="text-center p-4" {...props}>
      <Tag className="text-4xl font-bold">{title}</Tag>
      {subtitle && <p className="text-lg">{subtitle}</p>}
    </header>
  );
};

export default Header;
