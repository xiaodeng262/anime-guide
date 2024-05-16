import AnimeHeader from "@/components/AnimeHeader";
import AnimeMain from "@/components/AnimeMain";
import AnimeFooter from "@/components/AnimeFooter";
import AnimeDetail from "@/components/AnimeDetail";
import AnimeRankingList from "@/components/AnimeRankingList";
import UserInfo from "@/components/UserInfo";

export default function Home() {
    return (
        <div>
            <AnimeHeader/>
            {/*<AnimeMain/>*/}
            {/*<AnimeDetail/>*/}
            {/*<AnimeRankingList/>*/}
            <UserInfo/>
            <AnimeFooter/>
        </div>
    );
}
