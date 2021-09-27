const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createProduct = (req,res) => {

    // res.status(200).json({ file: req.files, body:req.body })

    const {name, price, description, productPictures, createdBy} = req.body;
    // let productPictures = [];

    
    const img = req.file.filename;
    console.log(img);
    

    // if(req.file.length > 0){
    //     productPictures = req.files.map(file => {
    //         return { img: file.filename }
    //     })
    // }

    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        description,
        // productPictures,
        img
        // createdBy: req.user._id

    });
    console.log(product);

    product.save(((error,product) =>{
        if(error) return res.status(400).json({error});
        if(product){
            res.status(201).json({product});
        }
    }));

};

exports.getProducts = async (req,res) => {
    const products = await Product.find({}).select('_id name price description productPictures').exec();
    // const products = await Product.find().exec();

    res.status(200).json({ products })
}

exports.deleteProducts = async (req,res) => {
    const { ids } = req.body.payload;
    const productDeleted = await Product.findOneAndDelete({ _id: ids });

    // const deletedProducts = [];
    // for(let i=0; i< ids.length; i++){
    //     const deleteProduct = await Product.findOneAndDelete({ _id: ids[i]._id });
    //     deletedProducts.push(deleteProduct);
    //  }
    
     if(productDeleted){
        res.status(200).json({message:'product deleted!!!'})
     }else{
         res.status(400).json({message: 'Something went wrong'});
     }
    
}
exports.updateProducts = async (req,res) => {
    const id = req.body._id
    console.log(id);
    // const productsUpdates = [];
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }
    const productUpdated = await Product.findOneAndUpdate({ _id: id }, product, {new: true} );
    // productsUpdates.push(productUpdated)
    console.log(productUpdated);
    // console.log(productsUpdates);

     if(productUpdated){
        res.status(200).json({message:'product Updated!!!'})
     }else{
         res.status(400).json({message: 'Something went wrong'});
     }
    
}

exports.getProductInfo = async (req,res) => {
    const id = req.body._id
    const productInfo = await Product.findOne({_id: id}).exec();
    console.log(productInfo);
    res.status(200).json({ productInfo })
}