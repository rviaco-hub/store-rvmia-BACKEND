import { Schema, model } from 'mongoose';

const PaymentSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Order' },
  provider: String,
  status: String,
  reference: String
}, { timestamps: true });

export default model('Payment', PaymentSchema);
