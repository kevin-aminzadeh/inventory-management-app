const {
  UserModel,
  RoleModel,
  ProductModel,
  ProductItemModel,
  BrandModel,
  CategoryModel,
} = require('../models/index');

searchBrands = async () => {
  try {
    const products = await BrandModel.findAll({
      raw: true,
      nest: true,
      where: {
        name: 'Apple',
      },
      include: {
        model: ProductModel,
      },
    });
    return(products);
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
searchBrands();
