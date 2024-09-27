import Link from "next/link";
import {FaFacebookF , FaInstagram , FaTwitter , FaLinkedin, FaGithub, FaGoogle} from "react-icons/fa"


const SignUpForm = () => {
    return (
      <main className="bg-amber-100 bg-cover bg-center bg-no-repeat">
        <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
          <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
            <h1 className="text-center text-white font-light text-4xl bg-yellow rounded-t-lg m-0 py-5">SignUp</h1>
            <form className="p-6">
              <input type="text"  name="" placeholder="Fullname" className="py-3 px-4 w-full text-black text-sm font-light rounded-full  outline-none" />
              <input type="email" name="" placeholder="E-mail" className="py-3 px-4 w-full text-black text-sm font-light rounded-full  outline-none mt-3" />
              <input type="text" name="" placeholder="Password" className="py-3 px-4 w-full text-black text-sm font-light rounded-full  outline-none mt-3" />
              <input type="text" name="" placeholder="Confirm Password" className="py-3 px-4 w-full text-black text-sm font-light rounded-full outline-none mt-3" />
              <div className="flex mt-5 justify-between items-center">
                <Link href="/" className="text-white cursor-pointer transition hover:text-black">Already Registered?</Link>
                <button type="submit" className="py-3 h-[3rem] w-[8rem] bg-yellow text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-113 mt-3 ">Sign Up</button>
              </div>
              <div><h2 className="py-14 px-20  text-black  text-center text-sm font-light outline-none">Sign Up with Social Network</h2>     
              <div className="flex justify-center items-center space-x-4 mt-0 text-lg">
              <Link className="text-yellow hover:text-black" href={"https://google.com"}><FaGoogle/></Link> 
                     <Link className="text-yellow hover:text-black " href={"https://www.facebook.com/"}><FaInstagram /></Link> 
                     <Link className="text-yellow hover:text-black" href={"https://www.linkedin.com/"}><FaLinkedin /></Link> 
              </div>
            </div>
            
        </form>
        
 </aside> 
 
        </div>
       
      </main>
    );
  }
  
  export default  SignUpForm;