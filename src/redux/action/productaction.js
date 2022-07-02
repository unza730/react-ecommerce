export const AddProduct = (product) => {
    return {
        type: "ADD_ITEM", 
        payload: product
    }
}
export const DeleteProduct = (product) => {
  return {
    type: "DELETE_ITEM",
    payload: product,
  };
};