export function reformatArray(
  arr: {
    _id: string;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    usdprice: number;
    categoryID: string;
  }[]
) {
  return arr.map((item) => ({
    id: item?._id,
    title: item?.name,
    description: item?.description,
    categoryId: item?.categoryID,
    price: item?.usdprice,
    image: item?.image,
  }));
}
