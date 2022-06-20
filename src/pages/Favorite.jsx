import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Layout from "../components/Layout";
import { withRouter } from "../utils/Navigation";
import FavCard from "../components/FavCard";

const Favorite = (props) => {
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-gray-200">
        {favorites.map((item) => (
          <FavCard
            key={item.id}
            img={item.poster_path}
            title={item.title}
            onClickItem={() => navigate(`detail/${item.id}`)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default withRouter(Favorite);
