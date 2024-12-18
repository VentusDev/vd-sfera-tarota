import React from "react"


type ModalType = {
    open: boolean,
    onClose: ()=>void,
    children: React.ReactNode
}


const Modal = ({ open, onClose, children }: ModalType) => {
    return (
      // backdrop
      <div
        onClick={onClose}
        className={`
          fixed inset-0 flex justify-center items-center transition-colors z-50 
          ${open ? "visible bg-black/20" : "invisible"}
        `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            glass-bg rounded-xl shadow p-6 transition-all container max-md:max-h-screen overflow-y-scroll
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 px-2 text-gray-900 bg-zinc-300/50 rounded-xl hover:bg-gray-50/50 hover:text-gray-600"
          >
           X
          </button>
          {children}
        </div>
      </div>
    )
  }

  export default Modal