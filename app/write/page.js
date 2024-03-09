export default function Write() {
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
}