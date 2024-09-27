import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <main className="bg-amber-100 bg-cover bg-center bg-no-repeat">
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
        <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
          <h1 className="text-center text-white font-light text-4xl bg-yellow rounded-t-xl m-0 py-4">Forgot Password</h1>
          <form className="p-6">
            <input type="email" placeholder="Enter your email address" className="py-3 px-4 w-full text-black text-sm font-light rounded-full outline-none" />
            <button type="submit" className="h-[3rem] w-[8rem] bg-yellow text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-111 mt-3 text-sm">Send Reset Link</button>
          </form>
          <div className="text-center mt-3">
            <Link href="/log-in" className="text-white cursor-pointer transition hover:text-black ">Back to Login</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default ForgotPasswordPage;