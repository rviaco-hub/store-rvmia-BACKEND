import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    price: Number
  }],
  total: Number,
  status: { type: String, default: 'pending' }
}, { timestamps: true });

export default model('Order', OrderSchema);
