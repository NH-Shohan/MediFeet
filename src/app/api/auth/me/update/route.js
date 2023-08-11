import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = `/tmp/${file.name}`;
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);

  return NextResponse.json({ success: true });
}

// import { getSession } from "next-auth/react";
// import { NextResponse } from "next/server";
// import dbConnect from "../../../../../../backend/config/dbConnect";
// import upload from "../../../../../../backend/utils/multer";

// const uploadMiddleware = upload.array("image");

// export async function PUT(req, res, uploadMiddleware) {
//   try {
//     const { data: session } = getSession();
//     await dbConnect();
//     console.log(session.user);

//     const newUserData = {
//       name: req.body.name,
//       email: req.body.email,
//     };

//     if (req.files.length > 0) {
//       const uploader = async (path) => await upload(path, "buyitnow/avatars");

//       const file = req.files[0];
//       const { path } = file;

//       const avatarResponse = await uploader(path);
//       fs.unlinkSync(path);
//       newUserData.avatar = avatarResponse;
//     }

//     console.log(newUserData);

//     // const user = await User.findByIdAndUpdate(req.user._id, newUserData);

//     return NextResponse.json(
//       {
//         message: "address updated successfully!",
//         user,
//       },
//       {
//         status: 201,
//       }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: "Error updating profile",
//         error: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
