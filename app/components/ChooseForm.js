export default function ChooseForm() {
  const wordWithApostrof = "Don't";
  return (
    <div class="bg-chooseMobile bg-center bg-cover px-5 py-14 text-white">
      <div class="flex justify-end">
        <p class="text-sm font-extralight leading-5 w-[179px] mb-6">
          {wordWithApostrof} miss your opportunity! Fill out the form right now
          and join our team!
        </p>
      </div>
      <p class="text-xs font-extralight leading-[22px]">
        I confirm my consent to the processing of personal data.
      </p>
      <button
        type="submit"
        class="block text-3xl font-medium uppercase ml-auto p-2 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 transition-all duration-300 ease-linear"
      >
        SEND
      </button>
    </div>
  );
}
