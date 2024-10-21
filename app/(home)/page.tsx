import FAQHome from "./_components/FAQHome";
import BodyStress from "./_components/BodyStress";
import DidYouKnow from "./_components/DidYouKnow";
import Hero from "./_components/Hero";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-y-8 mt-10">
      <Hero />
      <BodyStress />
      <DidYouKnow />
      <FAQHome />
    </div>
  );
};

export default HomePage;
