export default function ContactForm() {
  return (
    <form className="form ">
      <div className="mb-6">
        <label className="text-xs font-extralight leading-6 tracking-[2.4px] ">
          Full name
          <input
            name="user-name"
            type="text"
            required
            placeholder="John Smith"
            className="w-[280px] text-[13px] font-extralight leading-6 bg-white bg-opacity-5 px-2"
            //   minlength="2"
            //   pattern="[a-zA-Zа-яА-ЯїЇ]+"
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="text-xs font-extralight leading-6 tracking-[2.4px] ">
          E-mail
          <input
            name="user-email"
            type="email"
            required
            placeholder="johnsmith@email.com"
            className="w-[280px] text-[13px] font-extralight leading-6 bg-white bg-opacity-5 px-2"
          />
        </label>
      </div>
      <label className="text-xs font-extralight leading-6 tracking-[2.4px]">
        Message
        <textarea
          name="user-message"
          className="w-[279px] h-[193px] text-[13px] font-extralight leading-6 bg-white bg-opacity-5 resize-none px-2"
        ></textarea>
      </label>

      <button
        type="submit"
        className="block text-3xl font--medium uppercase ml-auto p-2 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 transition-all duration-300 ease-linear"
      >
        Send
      </button>
    </form>
  );
}
