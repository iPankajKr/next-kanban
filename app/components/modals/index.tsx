"use client";

import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";

const ModalWrapper = () => {
  return (

    <ModalOverlay
      className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-dark-primary/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
    >
      <Modal
        isDismissable
        className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-light-primary dark:bg-dark-primary p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
      >
        <Dialog>
          <Heading slot="title">Notice</Heading>
          <p>Click outside to close this dialog.</p>
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
};

export default ModalWrapper;
