export default function Register() {
    return (
      <div>
          <form action="/api/auth/signup" method="POST" >
            <input name="name" type="text" placeholder="이름" /> 
            <input name="email" type="text" placeholder="이메일" />
            <input name="password" type="password" placeholder="비번" />
            <input name="role" type="input" placeholder="회원타입" />
            <button type="submit">id/pw 가입요청</button>
          </form>
      </div>
    )
  }