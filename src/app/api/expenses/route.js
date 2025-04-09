import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb"; // ✅ Make sure this is exactly like this!
import Expense from "@/models/expense";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body); // Debugging log

    await connectToDatabase(); // This line failed earlier
    console.log("DB Connected ✅");

    const expense = await Expense.create(body);
    return NextResponse.json(expense);
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ message: "Error adding expense" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const expenses = await Expense.find().sort({ date: -1 });

    return NextResponse.json(expenses);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ message: "Error fetching expenses" }, { status: 500 });
  }
}
