import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";

const GET = async () => {
    await connectDB();
    const user = await User.findOne();
    return new Response(JSON.stringify(user), { status: 200 });
}

const POST = async (request) => {
    await connectDB();
    const { username, email, image } = await request.json();

    let userfind = await User.findOne({ email });

    if (!userfind) {
        const newUser = new User({ username, email, image });
        await newUser.save();
        return new Response(JSON.stringify(newUser), { status: 201 });
    } else {
        return new Response(JSON.stringify(userfind), { status: 200 });
    }
}

export { GET, POST };