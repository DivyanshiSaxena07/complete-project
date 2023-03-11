import { Cart } from "../model/cartModel.js";
// import { Category } from "../model/category.model.js";

export const deleteProduct = async (req, res, next) => {
    const productIndex = req.params.index;
    const user_Id = req.session.userId;
    let cartItems = await Cart.findOne({ userId: user_Id });
    cartItems.productList.splice(productIndex * 1, 1);
    await Cart.create(cartItems);
    res.redirect("/cart/");
}
export const addToCart = async (req, res, next) => {
    let product = req.body;
    console.log(product)

    let user = await Cart.findOne(product );
    if (user) {
        user.productList.push({
            productId: product._id,
            productName: product.productName,
            productPrice: product.productPrice,
            productImage: product.productImage,
        });
        await Cart.create(user);
        return res.status(200).json({  message: 'Successfully added product in cart',status:true });
    }
    else {
        await Cart.create({
            userId: req.body.userId,
            productList: [
                {
                    productId: product._id,
                    productName: product.productName,
                    productPrice: product.productPrice,
                    productImage: product.productImage,
                    productDescription: product.productDescription
                }
            ]
        })
        return res.status(200).json({ message: 'Successfully added product in cart' ,status:true});
    }
}

//--------Showing data in Cart-----------//
export const cart = async (req, res, next) => {
    let user_Id = req.body.userId;
    let items = await Cart.findOne({ userId: user_Id })
    let categories = await Category.find();
    return res.render("user/cart.ejs", {
        cartList: items.productList,
        currentUser: req.body,
        categoryList: categories
    });
}

export const cartList = async (req, res, next) => {

    let userId = req.body.userId;
    console.log(userId)
    let cartItems = await Cart.findOne({ userId: userId })
    let items = [];
    console.log(cartItems)
    if (cartItems) {
        for (let i = 0; i < cartItems.productList.length; i++) {
            let item = cartItems.productList[i].toJSON();
            item.quantity = 1;
            items.push(item);
        }
        return res.status(200).json({ items: items });
    }
    else
    return res.status(200).json({ items});
}