import Link from "next/link.js";
import Image from "next/image.js";
import { transactions } from "../../data/transactions.js";
import { GoArrowRight } from "react-icons/go";

const LatestTransactions = () => {
    // console.log(transactions);
    return (
        <div className="md:flex gap-4">
            <div className="mb-4">
                <h2 className="text-2xl font-medium text-center capitalize">
                    Latest transaction
                </h2>
                <div className="my-8">
                    {transactions.map((transaction, index) => (
                        <div
                            key={index}
                            className="bg-surface bg-[#F9F8FF] p-2 rounded-2xl flex items-center gap-4 w-[500px] m-4"
                        >
                            <Image
                                src="/txn.svg"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <div className="flex items-center w-full justify-between">
                                <div className="flex flex-col">
                                    <p className="text-secondary font-medium mb-2 text-[#AE9CFE]">
                                        {transaction.txnHash}
                                    </p>
                                    <p className="text-primary text-sm">
                                        {transaction.timestamp}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-primary font-medium">
                                        From{" "}
                                        <span className="text-hover font-medium text-[#AE9CFE]">
                                            {transaction.from}
                                        </span>
                                    </p>
                                    <p className="text-secondary font-medium ">
                                        To{" "}
                                        <span className="text-[#AE9CFE]">
                                            {transaction.to}
                                        </span>
                                    </p>
                                </div>
                                <p className="text-primary font-bold p-2 rounded-xl bg-unique">
                                    <span className="bg-[#F2F3F7] p-2">
                                        {transaction.value}
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
                    view all transactions <GoArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default LatestTransactions;
