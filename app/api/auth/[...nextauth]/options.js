import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../backend/config/dbConnect";
import User from "../../../../backend/models/user";

const options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return user;
      },
    }),
  ],
};

module.exports = { options };
