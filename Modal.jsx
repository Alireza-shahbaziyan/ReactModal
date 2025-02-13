import PropTypes from "prop-types";

const ModalCmp = ({ isOpen, onClose, children, title,width }) => {
  if (!isOpen) return null;
   // Define allowed width classes
   const widthClasses = {
    small: "w-64",    // 16rem
    medium: "w-96",   // 24rem
    large: "w-[29rem]",
    xlarge: "w-[32rem]",
    full: "w-full",
  };
   // Default to medium if width is not recognized
   const modalWidth = widthClasses[width] || "w-96";
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={`bg-white rounded-lg p-6 shadow-lg relative ${modalWidth}`}>
        {/* Header */}
        <div className="flex justify-between w-full">
          {title && <div className="text-lg font-bold text-center ">{title}</div>}
          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
              ✖️
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};


ModalCmp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  width:PropTypes.string
};

export default ModalCmp;
