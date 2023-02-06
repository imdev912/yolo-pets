import { PetList } from "../../types/petData";
import { AddCarousel } from "../carousel/Carousel";
import { AddModal } from "../modal/Modal";


const DetailCard = (petData: PetList) => {
  const img_path = `images/${petData.breed && petData.breed.name.toLocaleLowerCase().replace(' ', '-')}`;

  AddModal({
    id: "pet-detail",
    body: `
      <div class="pet--detail">
        ${AddCarousel(img_path)}

        <div class="pet--description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>

        <div class="d-flex justify-content-between">
          <table class="pet--info">
            <tbody>
              <tr>
                <th>Name</th>
                <td>${petData.name && petData.name.name}</td>
              </tr>
          
              <tr>
                <th>Age</th>
                <td>${petData.dob}</td>
              </tr>
          
              <tr>
                <th>Gender</th>
                <td>${petData.gender && petData.gender.name}</td>
              </tr>
          
              <tr>
                <th>Type</th>
                <td>${petData.breed && petData.breed.type}</td>
              </tr>
          
              <tr>
                <th>Breed</th>
                <td>${petData.breed && petData.breed.name}</td>
              </tr>
            </tbody>
          </table>

          <div class="d-flex flex-column justify-content-between pet--adopt text-end">
            <div class="adopt--like">
              <i class="fa-regular fa-heart"></i>
            </div>

            <div>
              <div class="d-flex justify-content-end align-items-center adopt--fee text-end">
                <i class="fa-solid fa-tag fa-sm fa-rotate-90" style="color: var(--brand-color); margin-right: 5px;"></i>
                <i class="fa-solid fa-dollar-sign fa-sm"></i>
                <span>${petData.price && petData.price.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    footer: `
      <div class="d-flex justify-content-between" style="gap: 25px;">
        <button class="btn btn-brand-outline adopt--close">
          Close
        </button>
      
        <button class="btn btn-brand adopt--pet" style="min-width: 115px;">
          <i class="fa-solid fa-hands-holding fa-sm"></i>
          Adopt
        </button>
      </div>
    `
  });
}

export { DetailCard };