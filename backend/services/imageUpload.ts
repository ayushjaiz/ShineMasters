import cloudinary from '../config/cloudinaryConfig';
import streamifier from 'streamifier';

interface UploadResult {
    secure_url: string;
    public_id: string;
}

export const uploadImage = (buffer: Buffer): Promise<UploadResult> => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
            if (result) {
                console.log('Image upload succesfully');
                resolve({
                    secure_url: result.secure_url,
                    public_id: result.public_id,
                });
            } else {
                console.log('error in image upload', error);
                reject(error);
            }
        });

        streamifier.createReadStream(buffer).pipe(stream);
    });
};
