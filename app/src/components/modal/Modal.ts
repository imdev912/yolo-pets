const HideModal = (modal: string) => {
  const modalRef = document.getElementById(modal);

  if (modalRef) {
    modalRef.style.opacity = "0";
  }

  setTimeout(() => {
    modalRef?.remove();

    if (!document.querySelector(".modal.show")) {
      document.body.classList.remove("overflow-hidden");
    }
  }, 500);
}


const ShowModal = (modal: string) => {
  const modalRef = document.getElementById(modal);

  if (modalRef) {
    setTimeout(() => {
      modalRef.classList.add("show");
    }, 300);

    setTimeout(() => {
      document.body.classList.add("overflow-hidden");
    }, 500);
  }
}


const AddModal = (modal: {
  id: string,
  title?: string,
  body?: string,
  footer?: string,
  config?: {
    title?: boolean,
    body?: boolean,
    footer?: boolean,
  }
}) => {
  if (!(modal instanceof Object)) {
    return false;
  }

  if (modal.id) {
    const modalRef = document.getElementById(modal.id);
    modalRef?.remove();
  }

  const data = {
    title: '',
    body: '',
    footer: ''
  };

  if (!modal.config) {
    modal.config = {
      "title": true,
      "body": true,
      "footer": true
    }
  }

  if (modal.config.title && modal.title) {
    data.title = `
      <div class="modal--title">
        ${modal.title}
      </div>
    `;
  }

  if (modal.config.body && modal.body) {
    data.body = `
      <div class="modal--body">
        ${modal.body}
      </div>
    `;
  }

  if (modal.config.footer && modal.footer) {
    data.footer = `
      <div class="modal--footer bg-white  sticky-bottom py-1">
        ${modal.footer}
      </div>
    `;
  }

  const myModal = `
    <div id="${modal.id}" class="modal">
      <div class="modal--content bg-white rounded-05 px-1 pt-1">
        ${data.title}
        ${data.body}
        ${data.footer}
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", myModal);
}

export { AddModal, ShowModal, HideModal };