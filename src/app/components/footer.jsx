import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-[#F9F8FF] p-4 py-10 md:p-24 flex flex-col mt-20">
            <div className="flex flex-row flex-wrap justify-between">
                <div className="flex flex-col gap-4">
                    <Image src="/logo.svg" alt="Logo" width={126} height={22} />
                    <div className="flex flex-col md:flex-row ms-1 my-5 gap-7 font-medium ">
                        <Link
                            href="/"
                            className="hover:text-gray-600 transition-colors text-lg md:text-base"
                        >
                            Explore
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-gray-600 transition-colors text-lg md:text-base"
                        >
                            Transactions
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-gray-600 transition-colors text-lg md:text-base"
                        >
                            Nodes
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-gray-600 transition-colors text-lg md:text-base"
                        >
                            PWR Wallet
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h2>Join our newsletter</h2>
                    <div className="flex flex-row gap-2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="rounded-md border-gray-300 border-solid border-[1.4px] p-2"
                        />
                        <button className="bg-[#112FF8] rounded-full py-2 px-6 text-white">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row border-t-gray-400 border-solid border-t-[1px] mt-10">
                <div className="flex flex-row flex-wrap gap-4 my-5">
                    <Link
                        href=""
                        className="bg-[#1E1F31] text-white p-3 rounded-xl"
                    >
                        <Image
                            src="/twitter.svg"
                            alt="logo"
                            className="inline-block"
                            width={32}
                            height={32}
                        />{" "}
                        <span className="inline-block text-sm ps-2">
                            Join our Twitter
                        </span>
                    </Link>
                    <Link
                        href=""
                        className="bg-[#1E1F31] text-white p-3 rounded-xl"
                    >
                        <Image
                            src="/telegram.svg"
                            alt="logo"
                            className="inline-block"
                            width={32}
                            height={32}
                        />{" "}
                        <span className="inline-block text-sm ps-2">
                            Join our Telegram
                        </span>
                    </Link>
                    <Link
                        href=""
                        className="bg-[#1E1F31] text-white p-3 rounded-xl"
                    >
                        <Image
                            src="/discord.svg"
                            alt="logo"
                            className="inline-block"
                            width={32}
                            height={32}
                        />{" "}
                        <span className="inline-block text-sm ps-2">
                            Join our Discord
                        </span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center mt-5 w-full">
                <p>@WOM Protocol Pte. Ltd. All Rights reserved</p>
                <div className="flex flex-wrap flex-col gap-5 text-gray-500 font-medium mt-10 md:mt-0 md:text-sm md:flex-row">
                    <Link href="" className="text-[#9C9BB3]">
                        Terms
                    </Link>
                    <Link href="" className="text-[#9C9BB3]">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
