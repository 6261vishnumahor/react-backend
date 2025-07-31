import Product from '../modals/productModels.js';
const pro= async(req,res)=>{
try{
    const { name, description, price, category, images, stock } = req.body;
    const product=new Product({
        name,
        description,
        price,
        category,
        images,
        stock
    })
    await product.save();
    res.status(201).json({massage:'product created successfully',product})
}
catch(err){
    console.log(err);
    res.status(500).json({err:'server error'})
}
}
const proGet=async(req,res)=>{
    try{
        const products=await Product.find();
        res.status(200).json(products)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: 'server error' })
    }
}
export{pro,proGet}