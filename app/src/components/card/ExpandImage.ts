import { AddModal } from "../modal/Modal";

const ExpandedImage = (url: string) => {
  AddModal({
    "id": "expand-image",
    "body": `
        <div class="expanded--image">
          <button class="btn border-0 expand--close">
            Close
          </button>
          
          <img src="${url}" alt="expanded-image" />
        </div>
      `,
    "config": {
      "title": false,
      "body": true,
      "footer": false
    }
  });
}

export { ExpandedImage };