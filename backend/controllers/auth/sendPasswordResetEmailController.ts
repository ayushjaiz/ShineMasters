import { Request, Response } from "express";
import { generateToken, tokenDuration } from "../../utils";
import { UserModel } from "../../models";
import { sendEmail } from "../../services"

const sendPassWordResetEmail = async function (req: Request, res: Response): Promise<void> {
    const { email } = req.body;

    if (!email) {
        res.send({ status: "failed", message: "Email field required" });
        return;
    }

    try {
        const user = await UserModel.getUser({ email: email });

        // Check if user is registered or not
        if (!user) {
            res.send({ status: "failed", message: "Email dosen't exist" })
            return;
        }

        // Generate token
        const token = generateToken(user.userId!, 600);

        // Frontend form link where the new password will be enetered
        const link = `http://localhost:3000/api/user/reset/${user.userId}/${token}`

        // Send email to the user email
        const result = await sendEmail({
            email: email,
            subject: "Reset Password",
            body: `<a href=${link}>Click Here</a> to Reset Your Password`
        });

        res.status(201).send({ status: "success", message: "check email to change password", token: token });
    } catch (error) {
        console.log('Error sending password reset email:', error);
        res.status(500).send({ status: "failed", message: "InternaL Server Error" })
    }
}

export default sendPassWordResetEmail;