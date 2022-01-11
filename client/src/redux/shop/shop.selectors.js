import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (!!collections ? Object.values(collections) : [])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  ({ isFetching }) => isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  ({ collections }) => !!collections
);
