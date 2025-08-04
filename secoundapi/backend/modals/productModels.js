import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    category: {
        type: Schema.Types.ObjectId,
        type:String,
        ref: 'Category'
    },
    images: [{
        type: String,
        trim: true
    }],
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    size: {
        type:String,
        required:true,
        // enum:["M" ,"S","XL","X"]
}

},

//  {
//     timestamps: true
// }
);

// Add indexes for performance and search
productSchema.index({ name: 'text' });
productSchema.index({ price: 1 });

export default mongoose.model('Product', productSchema);