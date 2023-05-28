import Swal from 'sweetalert2';

export class Preloader {
  show = (): void => {
    Swal.fire({
      title: 'Loading...',
    });
    Swal.showLoading();
  };

  close = (): void => {
    Swal.close();
  };
}
