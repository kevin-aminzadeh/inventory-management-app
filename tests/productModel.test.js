const {
  UserModel,
  RoleModel,
  ProductModel,
  ProductItemModel,
  BrandModel,
  CategoryModel,
} = require('../models/index');

async function get_all_products() {
  try {
    const data = {}
    const products = await ProductModel.findAll({
      raw: true,
      include: {
        model: ProductItemModel,
      },
    });
    console.log(products[0].id);
  } catch (error) {
    console.error(error);
  }
}
get_all_products();
