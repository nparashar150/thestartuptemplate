import { AlertDialog, AlertDialogContent } from "@repo/ui/components/ui/alert-dialog";
import { FC } from "react";

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => onClose(open)}>
      <AlertDialogContent className={className}>{children}</AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: (isOpen: boolean) => void;
  className?: HTMLDivElement["className"]
}
