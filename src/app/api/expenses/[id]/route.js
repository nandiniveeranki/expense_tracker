import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Expense from "@/models/expense";

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();

    const { id } = params; // 👈 works in app directory
    const deleted = await Expense.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ message: "Expense not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ message: "Error deleting expense" }, { status: 500 });
  }
}
