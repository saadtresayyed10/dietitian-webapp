const gridContents = [
  {
    title: "Frequent dieting",
    description:
      "is associated with body dissatisfaction, depression, lower self-esteem, and increases in binges and cravings?",
  },
  {
    title: "Weight cycling",
    description:
      "has been linked to type 2 diabetes, high blood pressure, cancer, and bone fracture?",
  },
  {
    title: "Yo-Yo dieters",
    description:
      "who continually regain lost weight tend to regain weight in the abdominal area.",
  },
];

const DidYouKnow = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col lg:gap-y-16 gap-y-10 bg-white text-green-950 mt-10">
      <h1 className="font-unbounded lg:text-4xl text-3xl font-semibold capitalize">
        Did You Know?
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-[80%] w-[60%] text-center lg:gap-[80px] gap-y-10">
        {gridContents.map((content, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center flex-col gap-y-3 p-6 border shadow-md rounded-lg"
          >
            <h3 className="font-argesta font-bold lg:text-2xl text-xl uppercase">
              {content.title}
            </h3>
            <p className="font-argesta font-light lg:text-base text-sm">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DidYouKnow;
