export default function ContactForm() {
  return (
    <form className="form ">
      <div className="md:flex md:justify-between xl:flex-col mb-4 xl:mb-6">
        <div className="xl:flex xl:gap-7">
          <div className="mb-6 md:flex md:flex-col ">
            <label
              htmlFor="name"
              className="text-xs font-extralight leading-6 tracking-[2.4px] "
            >
              Full name
            </label>
            <input
              id="name"
              name="user-name"
              type="text"
              required
              placeholder="John Smith"
              className="w-[280px] md:w-[221px] xl:w-[293px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 px-2"
              //   minlength="2"
              //   pattern="[a-zA-Zа-яА-ЯїЇ]+"
            />
          </div>
          <div className="mb-6 md:flex md:flex-col">
            <label
              htmlFor="mail"
              className="text-xs font-extralight leading-6 tracking-[2.4px] "
            >
              E-mail
            </label>
            <input
              id="mail"
              name="user-email"
              type="email"
              required
              placeholder="johnsmith@email.com"
              className="w-[280px] md:w-[221px] xl:w-[293px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 px-2"
            />
          </div>
        </div>
        <div className="md:flex md:flex-col ">
          <label
            htmlFor="text"
            className="text-xs font-extralight leading-6 tracking-[2.4px]"
          >
            Message
          </label>
          <textarea
            id="text"
            name="user-message"
            className="w-[279px] md:w-[463px] xl:w-[610px] h-[193px] md:h-[221px] xl:[174px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 resize-none px-2"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="block text-3xl xl:text-[32px] font--medium uppercase ml-auto p-2 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 transition-all duration-300 ease-linear"
      >
        Send
      </button>
    </form>
  );
}
