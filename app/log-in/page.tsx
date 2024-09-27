import Link from "next/link";

const LoginForm = () => {
  return (
    <main className="bg-amber-100 bg-cover bg-center bg-no-repeat">
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
        <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
          <h1 className="text-center text-white font-light text-4xl bg-yellow rounded-t-xl m-0 py-5">Welcome</h1>
          <form className="p-6">
            <input type="text" placeholder="Username/Email" className="py-3 px-4 w-full text-black text-sm font-light rounded-full outline-none" />
            <input type="password" placeholder="Password" className="py-3 px-4 w-full text-black text-sm font-light rounded-full outline-none mt-3" />
            <div className="flex mt-5 justify-between items-center">
              <Link href="/sign-up" className="text-white cursor-pointer transition hover:text-black">Not Yet Registered?</Link>
              <button type="submit" className="h-[3rem] w-[8rem] bg-yellow text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110">Log In</button>
            </div>
            <div className="text-center mt-3">
              <Link href="/forgot-password" className="text-white cursor-pointer transition hover:text-black">Forget Password?</Link>
              
            </div>
          </form>
        </aside>
      </div>
    </main>
  );
}

export default LoginForm;