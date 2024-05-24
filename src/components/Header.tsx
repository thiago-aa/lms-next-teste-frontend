interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps){
  const {title} = props;
  return (
    <header className="bg-gray-800 text-white py-4 mb-5">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
};
