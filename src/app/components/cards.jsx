"use client";
import Image from "next/image";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const data = [
    {
        name: "Apr 23",
        uv: 840,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Apr 30",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "May7",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const Cards = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid md:grid-rows-4 md:grid-cols-4 lg:grid-rows-2 lg:grid-cols-8 gap-4 my-20 justify-center">
                <div className="bg-surface bg-[#F9F8FF] p-4 rounded-2xl md:col-span-2 flex items-center gap-4 justify-center">
                    <Image src="/pwrPrice.svg" alt="" width={32} height={32} />
                    <div>
                        <p className="uppercase text-sm text-secondary mb-2 text-center">
                            pwr price
                        </p>
                        <p className="text-primary font-bold text-center">
                            $1.098
                            <span className="text-error font-normal text-red-500">
                                {" "}
                                (-4.19%)
                            </span>
                        </p>
                    </div>
                </div>
                <div className="bg-surface bg-[#F9F8FF] p-4 rounded-2xl md:col-span-2 lg:col-span-3 flex items-center gap-4 justify-center">
                    <Image
                        src="/transactions.svg"
                        alt=""
                        width={32}
                        height={32}
                    />
                    <div className="flex flex-col gap-2 grow">
                        <p className="uppercase text-sm text-secondary mb-2 text-center">
                            transactions
                        </p>
                        <p className="text-primary font-bold text-center">
                            1,960.01 M
                        </p>
                    </div>
                    <div>
                        <p className="uppercase text-sm text-secondary mb-2 text-center">
                            tps
                        </p>
                        <p className="text-primary font-bold text-center">
                            5,200
                        </p>
                    </div>
                </div>
                <div className="bg-surface bg-[#F9F8FF] p-4 rounded-2xl lg:col-span-3 md:row-span-2 md:col-span-2 justify-center">
                    <p className="uppercase text-sm text-secondary mb-2 text-center">
                        TRANSACTION HISTORY IN 14 DAYS
                    </p>
                    <div className="w-full h-40 rounded-xl">
                        <ResponsiveContainer>
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="uv"
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-surface bg-[#F9F8FF] p-4 rounded-2xl md:col-span-2 flex items-center gap-4 justify-center">
                    <Image
                        src="/pwrMarketCap.svg"
                        alt=""
                        width={32}
                        height={32}
                    />
                    <div>
                        <p className="uppercase text-sm text-secondary mb-2 text-center">
                            pwr market cap
                        </p>
                        <p className="text-primary font-bold truncate text-center">
                            $1,000,000,000
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-3 md:col-span-2 gap-4 flex justify-center">
                    <div className="bg-surface bg-[#F9F8FF] p-4 rounded-2xl basis-1/2 flex items-center gap-4 justify-center">
                        <Image
                            src="/blocks.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <div>
                            <p className="uppercase text-sm text-secondary mb-2 text-center">
                                blocks
                            </p>
                            <p className="text-primary font-bold truncate text-center">
                                10199
                            </p>
                        </div>
                    </div>
                    <div className="bg-surface bg-[#F9F8FF] p-4 rounded-2xl basis-1/2 flex items-center gap-4 justify-center">
                        <Image
                            src="/validators.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <div>
                            <p className="uppercase text-sm text-secondary mb-2 text-center">
                                validators
                            </p>
                            <p className="text-primary font-bold truncate text-center">
                                191910
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
