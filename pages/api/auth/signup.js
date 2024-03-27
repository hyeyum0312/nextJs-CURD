import { connectDB } from "@/app/util/database";
import bcrypt from 'bcrypt'

export default async function handler(request, response) {
    if (request.mathod === "POST") {
        await bcrypt.hash(request.body.password, 10)
        const db = (await connectDB).db("forum")
        await db.collection('user_cred').insertOne(req.body);
    }
}