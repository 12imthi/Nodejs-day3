

import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    emp_firstname : String,
    emp_lastname : String,
    emp_email : String,
    emp_role : String,
})

const Employee = mongoose.model("Employee",empSchema)

export default Employee