const { Product, Item,Brand ,Category} = require('../models/index');

exports.getProducts = async () => {
  try {

    const products = await ProductModel.findAll();
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.getProductById = async (id) => {
  try {
    const products = await Product.findByPk(id, {
      include: {
        model: Item,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.addProduct = async (body) => {
  try {
    const products = await Product.create(body);
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.deleteProduct = async (param) => {
  try {
    const products = await Product.destroy({
      where: {
        id: param,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

exports.updateProduct = async (param, data) => {
  try {
    const products = await Product.update(param, {
      where: {
        id: data,
      },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};

//done
exports.getProductByCategory = async (category) => {
  console.log('running getProductByCategory' + '\n\n\n\n');
  try {
    const categoryObj= await Category.findOne({
      attributes: ['id'],
      where: { name: category },
    });

    const products = await Product.findAll({
      attributes: ['name'],
      where: { category_i_d: categoryObj.id },
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
//done
exports.getProductByName = async (productName) => {
  try {
    console.log('running getProductByName' + '\n\n\n\n');
    const products = await Product.findAll({
      attributes: ['name', "cost_price", "sale_price"],
      where: { name: productName }
    });
    return products;
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
//done
exports.getProductByBrand = async (brandName) => {
  try {
    console.log('running getProductByBrand' + '\n\n');
    const brandobj = await Brand.findOne({
      attributes: ['id'],
      where: { name: brandName },
    });

    console.log("brandId: " + brandobj.id)

    const products = await Product.findAll({
      attributes: ['name', "cost_price", "sale_price"],
      where: { brand_i_d: brandobj.id }
    });

    return products;
    
  } catch (err) {
    // Log Errors
    throw Error(err);
  }
};
