import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
    // const { id } = useParams();
    const categoryNews = useLoaderData()

    return (
        <div className="">

            {
                categoryNews.map(news => <NewsCard
                    key={news._id} news={news}
                >

                </NewsCard>)
            }
        </div>
    );
};

export default Category;