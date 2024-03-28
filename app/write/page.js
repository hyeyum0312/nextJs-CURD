import { connectDB } from "@/app/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Write() {
    const user = await getServerSession(authOptions);
    console.log('user',user);

    if (user) {
        return (
            <div>
                <h4>글작성</h4>
                <form action="/api/post/new" method="POST">
                    <input className="inputText" type="text" name="title" placeholder="글제목"></input>
                    <textarea className="inputText" name="content" placeholder="글내용"></textarea>
                    <button type="submit">작성</button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <p>로그인 후 이용 가능합니다.</p>
            </div>
        )
    }

}