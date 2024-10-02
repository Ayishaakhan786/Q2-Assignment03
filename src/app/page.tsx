import Image from "next/image";
import ayisha from "./ayishakhan.jpg";
export default function Home() {
  return (
    <div className = "box flex bg-black	background-color: rgb(0 0 0)">
      <div className="box1  flex-auto w-55 ml-8 mt-4 text-xl">
      <samp className="text-pink-500">NAME</samp>
      <h1 className="text-blue-400">Ayisha Khan</h1>
      <samp className="text-pink-500">EMAIL Address</samp>
      <h1 className="text-blue-400">Ayishakhan228276@gmail.com</h1>
      <samp className="text-pink-500">GIT Repository</samp>
      <h1 className="text-blue-400"><a href="https://github.com/Ayishaakhan786">Ayishakhan786</a></h1>
        </div> 
        <div className="box2 flex mr-3">
        <Image src={ayisha} alt="img" width={200} className="h-40 mt-3"/>
        </div>
    </div>
  );
}
