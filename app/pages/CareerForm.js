export default function CareerForm() {
  const wordWithApostrof = "Don't";
  return (
    <div className="bg-careerMobile bg-center bg-cover px-5 py-14 text-white h-[826px] ">
      <div className="flex justify-end">
        <p className="text-sm font-extralight leading-5 w-[179px] mb-6">
          {wordWithApostrof} miss your opportunity! Fill out the form right now
          and join our team!
        </p>
      </div>
      <p className="text-xs font-extralight leading-[22px]">
        I confirm my consent to the processing of personal data.
      </p>
      <button
        type="submit"
        className="block text-3xl font-medium uppercase ml-auto p-2 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 transition-all duration-300 ease-linear"
      >
        SEND
      </button>
    </div>
  );
}
