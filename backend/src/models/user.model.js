import mongoos, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    fullName: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
    coverImage: {
      type: String, //cloudinary url
      
    },
    watchHistory: {
      type: [{
        type:Schema.Types.ObjectId,
        ref:"Video"
      },], //cloudinary url
      
    },
    password:{
        type:String,
        required: [true, 'Password is required.']
    },
    refreshToken: {
        type: String
    }
  },
  { timestamps: true }
);

export const User = mongoos.model("User", userSchema);
