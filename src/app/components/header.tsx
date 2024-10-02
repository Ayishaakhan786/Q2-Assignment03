import Link from "next/link"
export default function Header() {
    return (
        <div  className="bg-pink-100">
            <ul className="flex place-content-center ">
                <li className="m-5 text-black-100 text-lg"> <Link href = "/">Home</Link></li>
                <li className="m-5 text-black-100 text-lg"> <Link href = "../portfolio">Portfolio</Link></li>
                <li className="m-5 text-black-100 text-lg"> <Link href = "../about">About</Link></li>
                <li className="m-5 text-black-100 text-lg"> <Link href = "../contact">Contact Us</Link></li>
            </ul>
        </div>
    );
}