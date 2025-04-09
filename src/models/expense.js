import mongoose, { Schema, models } from 'mongoose';

const expenseSchema = new Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Expense = models.Expense || mongoose.model('Expense', expenseSchema);

export default Expense;
