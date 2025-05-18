export const Modal = ({
    onClose,
    children,
  }: {
    onClose: () => void;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose} 
      >
        <div
          className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative transform transition-transform duration-300 ease-in-out scale-100"
          onClick={(e) => e.stopPropagation()} 
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
 