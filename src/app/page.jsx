import Cards from "./components/cards";
import LatestBlocks from "./components/latestBlocks";
import LatestTransactions from "./components/latestTransactions";
import SearchBar from "./components/searchbar";

export default function Home() {
    return (
        <div className="min-h-screen mt-[10rem]">
            <h1 className="text-[56px] text-center font-semibold">
                The PWR Chain Explorer
            </h1>
            <SearchBar />
            <Cards />
            <div className="flex justify-center">
                <LatestBlocks />
                <LatestTransactions />
            </div>
        </div>
    );
}
