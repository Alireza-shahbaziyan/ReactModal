import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
        {/* Header */}
        {title && <h2 className="text-lg font-semibold text-center mb-4">{title}</h2>}

        {/* Content */}
        <div>{children}</div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
      </div>
    </div>
  );
};


Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  children: PropTypes.node.isRequired,
  title: PropTypes.string, 
};

export default Modal;
