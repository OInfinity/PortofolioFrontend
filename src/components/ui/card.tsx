interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-lg p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold mb-2 dark:text-white text-gray-900">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </a>
  );
}
