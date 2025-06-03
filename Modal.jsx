import { CircleX } from "lucide-react";
import PropTypes from "prop-types";

const ModalCmp = ({ isOpen, onClose, children, title, width, darkBack = true }) => {
  if (!isOpen) return null;

  const widthClasses = {
    small: "w-64",
    medium: "w-96",
    large: "w-[29rem]",
    xlarge: "w-[32rem]",
    full: "w-full",
  };

  const modalWidth = widthClasses[width] || "w-96";

  return (
    <div
      className={`fixed inset-0 ${darkBack ? "bg-black/40" : ""} flex justify-center md:items-center items-end z-[100]`}
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className={`bg-card-bg text-white rounded-t-[3rem] md:rounded-xl py-6 px-4 shadow-lg relative ${modalWidth}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag bar for mobile */}
        <span
          className="w-14 absolute p-1 rounded-3xl bg-[#1E1D39] right-[43%] z-20 top-1 md:hidden"
          onClick={onClose}
        ></span>

        {/* Header */}
        <div className="flex justify-between w-full items-center mb-2">
          {title && <div className="text-lg font-bold text-center">{title}</div>}
          {/* Close Button */}
          <button onClick={onClose} className="hidden md:flex">
            <CircleX size={32} className="text-white hover:text-red-500 hover:cursor-pointer" />
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
  darkBack: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
};

export default ModalCmp;
