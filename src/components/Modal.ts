// eslint-disable-next-line import/no-extraneous-dependencies
import Swal, { SweetAlertIcon } from 'sweetalert2';

interface ModalProps {
  title: string;
  text: string;
  icon: SweetAlertIcon;
}
export function Modal({ title, text, icon }: ModalProps) {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'OK',
  });
}
