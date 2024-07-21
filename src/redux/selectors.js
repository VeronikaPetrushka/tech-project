// import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

// export const selectFilteredCampers = createSelector(
//   [selectCampers, selectNameFilter],
//   (campers, nameFilter) =>
//     campers.filter((camper) =>
//       camper.name.toLowerCase().includes(nameFilter.toLowerCase())
//     )
// );
