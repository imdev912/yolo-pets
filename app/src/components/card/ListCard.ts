import { PetList } from "../../types/petData";


const ListCard = (data: PetList) => {
  return `
    <div class="list--card" data-id="${data.id}">
      <div class="image--overlay" style="background-image: url('images/${data.image}')">
      </div>

      <div class="position-relative" style="z-index: 1;">
        <img class="list--image" src="images/${data.image}" width="320" height="240" alt="german-shepherd" />

        <div class="list--info">
          <div class="info--basic info--name">
            ${data.name && data.name.name}
          </div>

          <div class="info--detail info--type">
            ${data.breed && data.breed.name}
          </div>

          <div class="info--detail info--type">
            <i class="fa-solid fa-paw fa-xs" style="width: 15px; height: 12px;"></i>
            ${data.breed && data.breed.type}
          </div>

          <div class="info--detail info--gender">
            <i class="fa-solid fa-venus-mars fa-xs" style="width: 15px; height: 12px;"></i>
            ${data.gender && data.gender.name}
          </div>

          <div class="info--basic info--age">
            <i class="fa-solid fa-calendar fa-xs" style="width: 15px; height: 12px;"></i>
            ${data.dob}
          </div>
        </div>
      </div>
    </div>
  `;
}

export { ListCard };