import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

export default function Modal({ children, open }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      console.log("Show");
      dialog.current.showModal();
    } else {
      console.log("Close");
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
