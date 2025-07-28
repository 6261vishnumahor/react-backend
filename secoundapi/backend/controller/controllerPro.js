import Product from '../modals/productModels.js';
const pro= async(req,res)=>{
// const name=req.body.name;
// const description=req.body.description;
// const price=req.body.price;
// const category=req.body.category;
// const images=req.body.images;
// const stock=req.body.stock;

const {name,discription,price,category,images,stock}=req.body;
try{
    const product=new Product({
        name,
        discription,
        price,
        category,
        images,
        stock
    })
    await product.save();
    res.status(201).json({massage:'product created successfully',product})
}
catch(err){
    res.status(500).json({err:'server error'})
}
}
export{pro}