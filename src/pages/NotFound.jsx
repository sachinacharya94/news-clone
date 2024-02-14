import notfoundimg from "../assets/404.png";
import PrimaryButton from "../components/PrimaryButton";

const NotFound = () => {
  const onGoBack = () => history.back();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img src={notfoundimg} alt="404.png" className="w-[300px]  h-[300px]" />
      <h1 className="font-bold mt-5 mb-4">404- page not found</h1>
      <p className="mb-10">
        Sorry, the page you are looking for does not exists!
      </p>
      <PrimaryButton title={"Go Back"} width={"380px"} onClick={onGoBack} />
    </div>
  );
};

export default NotFound;
