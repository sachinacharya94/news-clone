import AppleStoreBtn from "../assets/appleBtn1.png";
import GoogleStoreBtn from "../assets/googleBtn.png";
import Card from "../components/Card";
import CategorySlider from "../components/CategorySlider";
import SelectComponent from "../components/SelectComponent";
import { categories } from "../../fakedata";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";
import Axios from "../api/server"

const Home = () => {
  const [news, setNews]= useState([])
  const [page, setPage]= useState(1)

  useEffect(() => {
    getNews();
  }, [page]);

  const getNews = async () => {
    const response = await Axios.get(`news?page=${page}&limit=15`);

    if (news?.length > 0) {
      setNews((prev) => [...prev, ...response.data.data]);
    } else {
      setNews(response.data.data);
    }
  };
  const selectOptionsFiltered = categories.map((item) => {
    return { value: item.name, label: item.name };
  });

  return (
    <div className="max-w-commonwidth m-auto mb-[100px]">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mb-[15px]">
          Short,Summarized <br /> &{" "}
          <span className="text-appgreen">Uplifting</span> News
        </h1>
        <p className="font-medium mb-12">
          Get Robust Filter And All The Other Feature On Our App, Download Now
          !!
        </p>
        <div className="flex items-center mt-[-4.25rem]">
          <img
            src={AppleStoreBtn}
            alt="Apple Store Button"
            className="w-[140px] h-[120px] object-contain"
          />
          <img
            src={GoogleStoreBtn}
            alt="Google Store Button"
            className="w-[180px] h-[140px] object-contain"
          />
        </div>
      </div>

      <CategorySlider />
      <div className="flex justify-between my-[40px] xsm:flex-col sm:flex-row xsm:px-5 sm:px-0 gap-4">
        <h1 className="font-semibold">Top News of the Day</h1>
        <SelectComponent options={selectOptionsFiltered} onChange={() => {}} />
      </div>

      <div className="grid xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-between px-[20px]">
        {news?.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>

      <div className="flex justify-center items-center mt-[50px]">
        <PrimaryButton
          title={"Load More News"}
          onClick={() => setPage((prev)=>prev+1)}
          width={"250px"}
        />
      </div>
      
    </div>
  );
};

export default Home;
