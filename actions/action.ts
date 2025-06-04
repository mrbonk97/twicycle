import { RENTAL_LOCATION } from "@/constants/rental-location";

export const getRental = () => RENTAL_LOCATION;

export const getRentalById = (id: string) => {
  return RENTAL_LOCATION.find((item) => item.id == id);
};

export const getRentalByKeyword = (keyword: string) => {
  return RENTAL_LOCATION.filter((item) => {
    if (item.title.includes(keyword)) return true;
    if (item.address.includes(keyword)) return true;
    if (item.region.includes(keyword)) return true;
    return false;
  });
};
