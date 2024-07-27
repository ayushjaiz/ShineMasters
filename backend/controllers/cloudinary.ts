// import { Request, Response } from "express";
// import cloudinary from "../config/cloudinaryConfig";
// import streamifier from 'streamifier';

// async function uploadImage(req: Request, res: Response) {
//     try {
//         if (!req.file) {
//             res.status(400).json({ success: false, message: 'No file uploaded' });
//             return;
//         }

//         const streamUpload = (buffer: Buffer) => {
//             return new Promise((resolve, reject) => {
//                 const stream = cloudinary.uploader.upload_stream({ folder: 'uploads' }, (error, result) => {
//                     if (result) {
//                         resolve(result);
//                     } else {
//                         reject(error);
//                     }
//                 });
//                 streamifier.createReadStream(buffer).pipe(stream);
//             });
//         };

//         const result = await streamUpload(req.file.buffer);

//         res.json({ success: true, result });
//     } catch (error) {
//         res.status(500).json({ success: false, error });
//     }
// };

// export default uploadImage;
