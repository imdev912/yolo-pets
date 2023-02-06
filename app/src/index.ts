import { ExpandedImage } from './components/card/ExpandImage';
import { ListCard } from './components/card/ListCard';
import { DetailCard } from './components/card/DetailCard';
import { HideModal, ShowModal } from './components/modal/Modal';

import './css/style.css';
import { PetAge, PetBreed, PetColor, PetData, PetGender, PetList, PetName, PetPrice } from './types/petData';


const root = document.getElementById("root");
const app = document.createElement("div");
app.className = "app";
root?.insertAdjacentElement("afterbegin", app);
const petDetails = ["name", "age", "gender", "breed", "color", "price"];
const petData: PetData = {} as PetData;
const petList: PetList[] = [];
let loadMoreData = true;


const mobileCheck = () => {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent);
  return check;
};


const ua = {
  device: mobileCheck() ? "phone" : "desktop",
  browser: "chrome"
};


if ("navigator" in window && navigator.userAgent) {
  let user_agent = navigator.userAgent.toLocaleLowerCase();

  if (user_agent.indexOf("safari") > -1) {
    if (user_agent.indexOf("chrome") > -1) {
      ua["browser"] = "chrome";
    } else {
      ua["browser"] = "safari";
    }
  } else if (user_agent.indexOf("firefox") > -1) {
    ua["browser"] = "firefox";
  }
}


const init = async () => {
  for (const detail of petDetails) {
    const response = await fetch(`data/${detail}.json`);
    const data = await response.json();
    petData[detail as keyof PetData] = data;
  }
}


const petAge = (age: PetAge) => {
  let res = '';

  if (age["year"] > 0) {
    if (age["month"] > 0) {
      res += `${age["month"]} month`;

      if (age["month"] > 1) {
        res += 's '
      }
    }

    res += `${age["month"]} year`;

    if (age["year"] > 1) {
      res += 's '
    }
  } else {
    if (age["day"] > 0) {
      res += `${age["day"]} day`;

      if (age["day"] > 1) {
        res += 's '
      }
    }

    if (age["month"] > 0) {
      res += `${age["month"]} month`;

      if (age["month"] > 1) {
        res += 's '
      }
    }
  }

  return res;
}


const generateData = () => {
  const data: PetList = {} as PetList;

  petDetails.forEach((detail) => {
    const target = petData[detail as keyof PetData];
    const dataLen = target.length;
    const randomIdx = Math.floor(Math.random() * dataLen);

    switch (detail) {
      case "name":
        data.name = target[randomIdx] as PetName;
      break;

      case "age":
        data.age = target[randomIdx] as PetAge;
      break;

      case "gender":
        data.gender = target[randomIdx] as PetGender;
      break;

      case "breed":
        data.breed = target[randomIdx] as PetBreed;
      break;

      case "color":
        data.color = target[randomIdx] as PetColor;
      break;

      case "price":
        data.price = target[randomIdx] as PetPrice;
      break;
    }
  });

  const petBreed = data["breed"] || [];
  const petBreedName = petBreed["name"] || '';
  const imgPath = petBreedName.toLowerCase().replace(' ', '-');
  const pic = Math.ceil(Math.random() * 3);
  const image = `${imgPath}/${pic}.jpg`;

  data["id"] = petList.length + 1;
  data["image"] = image;
  data["dob"] = petAge(data["age"]);

  const content = document.getElementById("content");

  if (content) {
    content.insertAdjacentHTML("beforeend", `
    <div class="col">
      ${ListCard(data)}
    </div>
  `);
  }

  petList.push(data);
}


const makeScroll = (data: {
  target: HTMLElement,
  scroll: ScrollToOptions
}) => {
  if (ua["browser"] != "safari") {
    data.scroll.behavior = "smooth";
  }

  data.target.scroll(data.scroll);
}


const getScroller = (move = 1.5) => {
  if (document.querySelector('.scroller-container .scroller')) {
    document.querySelectorAll('.scroller-container').forEach((container) => {
      if (container instanceof HTMLElement && !container.dataset.scroll) {
        const scroller = container.querySelector('.scroller');

        if (!scroller) {
          return false;
        }

        container.parentElement?.classList.add('position-relative');
        container.dataset.scroll = "true";
        container.classList.add('d-flex');
        container.classList.add('flex-column');
        container.classList.add('flex-wrap');
        container.classList.add('justify-content-center');
        container.classList.add(ua.device === "phone" ? "overflow-auto" : "overflow-hidden");

        let c_dims = container.getBoundingClientRect();
        let s_dims = scroller.getBoundingClientRect();

        if (scroller instanceof HTMLElement) {
          if (ua.device === "desktop" && c_dims.right < s_dims.right) {
            let left = document.createElement('button');
            left.className = 'position-absolute d-flex justify-content-center align-items-center bg-white border-0 rounded-circle shadow xn';
            left.style.left = "0px";
            left.style.width = "30px";
            left.style.height = "28px";
            left.style.zIndex = "100";
            left.disabled = true;
            left.innerHTML = `<i class="fa-solid fa-angle-left"></i>`;
            left.setAttribute('role', 'button');
            left.setAttribute('aria-label', 'prev');
            left.addEventListener('click', function () {
              let scroll = container.scrollLeft - (container.offsetWidth / move);
  
              if (scroll < 0) {
                scroll = 0;
                left.disabled = true;
              }
  
              right.disabled = false;
  
              makeScroll({
                target: container,
                scroll: {
                  left: scroll
                }
              });
            });
  
            container.prepend(left);
  
            let right = document.createElement('button');
            right.className = 'position-absolute d-flex justify-content-center align-items-center border-0 bg-white rounded-circle shadow xn';
            right.style.right = "0px";
            right.style.width = "30px";
            right.style.height = "28px";
            right.style.zIndex = "100";
            right.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
            right.setAttribute('role', 'button');
            right.setAttribute('aria-label', 'next');
            right.addEventListener('click', function () {
              let scroll = container.scrollLeft + (container.offsetWidth / move);
  
              if (scroll >= scroller.offsetWidth - container.offsetWidth) {
                scroll = scroller.offsetWidth;
                right.disabled = true;
              }
  
              left.disabled = false;
  
              makeScroll({
                target: container,
                scroll: {
                  left: scroll
                }
              });
            });
  
            container.append(right);
          }
        }
      }
    })
  }
}

const populateList = () => {
  for (let i = 0; i < 20; i++) {
    generateData();
  }
}


window.addEventListener("click", (event) => {
  const target = event.target;

  if (target && target instanceof HTMLElement) {
    const classList = target.classList;

    if (classList.contains("login")) {
      target.insertAdjacentHTML("afterend", `
        <div class="bg-white rounded-pill px-1">
          <i class="fa-solid fa-user" style="color: var(--brand-color); margin-right: 5px;"></i>
          Jhon Deo
        </div>
      `);
  
      target.remove();
    }
  
    if (classList.contains("list--card")) {
      const listId = parseInt(target.dataset.id || '') - 1;

      if (!isNaN(listId)) {
        const petData = petList[listId];
        DetailCard(petData);
        getScroller();
        ShowModal("pet-detail");
      }
    }
  
    if (classList.contains("fa-heart")) {
      target.dataset.prefix = "fas";
    }
  
    if (classList.contains("adopt--close")) {
      HideModal("pet-detail");
    }
  
    if (classList.contains("adopt--pet")) {
      if (target instanceof HTMLButtonElement) {
        target.innerHTML = `<i class="fa-solid fa-check fa-sm"></i> Adopted`;
        target.disabled = true;

        setTimeout(() => {
          HideModal("pet-detail");
        }, 500);
      }
    }
  
    if (classList.contains("expand--image")) {
      const imgElem = target.querySelector("img");

      if (imgElem) {
        const img_path = imgElem.src;
        ExpandedImage(img_path);
        ShowModal("expand-image");
      }
    }
  
    if (classList.contains("expand--close")) {
      HideModal("expand-image");
    }
  }
});


window.addEventListener("scroll", () => {
  const scrollPosY = document.body.clientHeight - window.innerHeight - 56;

  if (window.scrollY >= scrollPosY && loadMoreData) {
    loadMoreData = false;
    document.getElementById("loader")?.classList.remove("d-none");

    setTimeout(() => {
      populateList();
      loadMoreData = true;
      document.getElementById("loader")?.classList.add("d-none");
    }, 500);
  }
});


(async () => {
  app.insertAdjacentHTML("beforeend", `
    <div id="content" class="row">
    </div>
  `);

  await init();
  populateList();
})();