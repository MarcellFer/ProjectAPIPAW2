const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  nama: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email harus diisi"],
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Format email tidak valid"],
  },
  password: {
    type: String,
    required: [true, "Password harus diisi"],
    minlength: 6,
    select: false, // tidak menampilkan password by default
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password sebelum disimpan
userSchema.pre("save", async function(next) {
  // hanya hash password jika password diubah
  if (!this.isModified("password")) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method untuk membandingkan password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
