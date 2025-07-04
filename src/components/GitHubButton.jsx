import { FaGithub } from 'react-icons/fa';

const GitHubButton = () => {
  return (
    <a
      href="https://github.com/pankajvitaldeveloper/ShoppyGlobe.git"
      target="_blank"
      rel="noopener noreferrer"
      title="View on GitHub"
      className="fixed right-6 bottom-24 z-50 bg-white border border-gray-300 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-gray-100 transition-colors"
    >
      <FaGithub size={28} className="text-gray-800" />
    </a>
  );
};

export default GitHubButton;
