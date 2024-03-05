import Link from "next/link.js";
import Image from "next/image.js";
import { blocks } from "../../data/blocks.js";
import { GoArrowRight } from "react-icons/go";

const LatestBlocks = () => {
    // console.log(blocks);
    return (
        <div className="md:flex gap-4">
            <div className="mb-4">
                <h2 className="text-2xl font-medium text-center capitalize">
                    Latest Block
                </h2>
                <div className="my-8">
                    {blocks.map((block, index) => (
                        <div
                            key={index}
                            className="bg-surface bg-[#F9F8FF] p-2 rounded-2xl flex items-center gap-4 w-[500px] m-4"
                        >
                            <Image
                                src="/block.svg"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <div className="flex items-center w-full justify-between">
                                <div className="flex flex-col">
                                    <p className="text-secondary font-medium mb-2 text-[#AE9CFE]">
                                        {block.block}
                                    </p>
                                    <p className="text-primary text-sm">
                                        {block.timestamp}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-primary font-medium">
                                        Fee Recipient{" "}
                                        <span className="text-hover font-medium text-[#AE9CFE]">
                                            {block.recipient}
                                        </span>
                                    </p>
                                    <p className="text-secondary font-medium text-[#AE9CFE]">
                                        {block.txns}
                                    </p>
                                </div>
                                <p className="text-primary font-bold p-2 rounded-xl bg-unique">
                                    <span className="bg-[#F2F3F7] p-2">
                                        {block.value}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link
                    href="/"
                    className="uppercase font-medium text-link flex items-center gap-4 justify-center"
                >
                    view all blocks <GoArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default LatestBlocks;
