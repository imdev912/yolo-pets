const AddCarousel = (img_path: string) => {
  let carousel = '';

  [1, 2, 3, 1, 2, 3].forEach((idx) => {
    const path = `${img_path}/${idx}.jpg`;

    carousel += `
      <div class="rounded-05 scroller-item">
        <div class="d-flex position-relative justify-content-center align-items-center expand--image" style="width: 100%; height: 100%; min-height: 220px;">
          <div class="image--overlay" style="background-image: url('${path}')">
          </div>

          <img class="position-relative detail--image" src="${path}" width="220" alt="carousel-item-${idx}" />
        </div>
      </div>
    `;
  });

  return `
    <div class="carousel">
      <div class="scroller-container">
        <div class="scroller">
          ${carousel}
        </div>
      </div>
    </div>
  `
}

export { AddCarousel };