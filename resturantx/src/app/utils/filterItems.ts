export const filterItems = (items: any[], selectedCategoryId: string) => {
  return items.filter((item) => item.categoryId === selectedCategoryId);
};
