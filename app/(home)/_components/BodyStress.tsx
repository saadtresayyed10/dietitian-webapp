const BodyStress = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center flex-col gap-y-6 text-green-950 text-center lg:p-16 mt-10">
      <div
        style={{ backgroundImage: "url('/images/food-bg-0.jpg')" }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 
                     opacity-50 lg:backdrop-blur-sm backdrop-blur-md"
      />

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="lg:w-[60%] w-[80%] flex justify-center items-center flex-col gap-y-6">
          <h1 className="font-unbounded font-semibold text-2xl lg:text-4xl">
            Being constantly preoccupied with how your body looks is stressful.
          </h1>
          <p className="font-argesta lg:text-lg text-sm font-medium">
            Have you devoted your entire life to weight loss? Does everything
            you do revolve around how your body looks? Food is just one of many
            factors that contribute to your well-being. Unfortunately,
            you&apos;ve probably been led to believe that the constant pursuit
            of weight loss is the cure-all for most health concerns. But this is
            far from the truth. The truth is that your weight loss efforts could
            be causing more harm than good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyStress;
