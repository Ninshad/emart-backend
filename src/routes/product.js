const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createProduct, getProducts,  deleteProducts, updateProducts, getProductInfo } = require('../controller/product');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');

// unreadable image change
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, path.join(path.dirname(__dirname), 'uploads'))
        },
        filename: function (req, file, cb) {
          cb(null, shortid.generate() +'-' + file.originalname)
        }
})

const upload = multer({ storage });



router.post('/product/create', upload.single('productPicture'), createProduct);
router.get('/product/getproducts', getProducts);
router.post('/product/deleteproduct', deleteProducts);
router.post('/product/updateproduct', upload.single('productPicture'), updateProducts);
router.get('/product/getproductinfo', getProductInfo);



module.exports = router;
