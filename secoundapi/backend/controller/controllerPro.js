import Product from '../modals/productModels.js';
const pro= async(req,res)=>{
try{
    const { name, description, price, category, images, stock, size } = req.body;
    const product=new Product({
        name,
        description,
        price,
        category,
        images,
        stock,
        size
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
const updatesize=async(req,res)=>{
    try{
        const p=req.params.id
        const update=req.body
        const product=await Product.findByIdAndUpdate(p,update,{
            new: true,
            runValidators: true
        })
        console.log("update data")
        res.status(200).json(product)

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: 'server error' })
    }
}
export{pro,proGet,updatesize}