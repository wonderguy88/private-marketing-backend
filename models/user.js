import mongoose from "mongoose";
//User Schema
const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: {type: String, required: true},
    country: {type: String, required: true}
});

export default mongoose.model("User", userSchema);