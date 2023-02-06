export type PetName = {
  "id": number,
  "name": string
};

export type PetAge = {
  "id": number,
  "day": number,
  "month": number,
  "year": number
}

export type PetGender = {
  "id": number,
  "name": string
}

export type PetBreed = {
  "id": number,
  "name": string,
  "type": string
}

export type PetColor = {
  "id": number,
  "name": string
}

export type PetPrice = {
  "id": number,
  "price": string
}

export interface PetData {
  "name": PetName[],
  "age": PetAge[],
  "gender": PetGender[],
  "breed": PetBreed[],
  "color": PetColor[],
  "price": PetPrice[]
};

export interface PetList {
  "id": number,
  "name": PetName,
  "image": string,
  "age": PetAge,
  "dob": string,
  "gender": PetGender,
  "breed": PetBreed,
  "color": PetColor,
  "price": PetPrice
};