import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

interface User {
    userId?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
}

interface updateUserParams {
    email?: string;
    password?: string;
}

class UserModel {
    /**
     * Adds a new user information in the database.
     * 
     * @param User - User object containing name, email, and password to add.
     */
    static async createUser({ name, email, password }: User): Promise<User> {
        try {
            console.log("email" + email);
            const res = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: password
                }
            });
            return res;
        } catch (error: any) {
            throw new Error('Failed to create user: ' + error.message);
        }
    }

    /**
     * Retrieve user information from the database.
     * 
     * @param email - Email address of the user to retrieve.
     * @param userId - Id of the user to retrieve.
     */
    static async getUser(options: { email?: string, userId?: number }): Promise<User | null> {
        try {
            const { email, userId } = options;

            // Use findFirst to search by either email or userId
            const user = await prisma.user.findFirst({
                where: {
                    OR: [
                        { email: email },
                        { userId: userId }
                    ]
                }
            });

            return user;
        } catch (error: any) {
            throw new Error('Failed to retrieve user: ' + error.message);
        }
    }

    /**
     * Updates user information in the database.
     * 
     * @param userId - ID of the user to update..
     * @param email - New email address of the user.
     * @param password - New password of the user.
     */
    static async updateUser(userId: number, { email, password }: updateUserParams): Promise<User> {
        try {
            const data: { email?: string, password?: string } = {};
            if (email) data.email = email;
            if (password) data.password = password;

            // Use Prisma's update method to update the user
            const result = await prisma.user.update({
                where: { userId: userId },
                data: data,
            });

            return result;
        } catch (error: any) {
            throw new Error('Failed to update user: ' + error.message);
        }
    }
}

export { User, UserModel };
