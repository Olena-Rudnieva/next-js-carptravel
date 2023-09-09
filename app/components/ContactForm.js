export default function ContactForm() {
  return (
    <form class="form ">
      <div class="mb-6">
        <label class="text-xs font-extralight leading-6 tracking-[2.4px] ">
          Full name
          <input
            name="user-name"
            type="text"
            required
            placeholder="John Smith"
            class="w-[280px] text-[13px] font-extralight leading-6 bg-white bg-opacity-5 px-2"
            //   minlength="2"
            //   pattern="[a-zA-Zа-яА-ЯїЇ]+"
          />
        </label>
      </div>
      <div class="mb-6">
        <label class="text-xs font-extralight leading-6 tracking-[2.4px] ">
          E-mail
          <input
            name="user-email"
            type="email"
            required
            placeholder="johnsmith@email.com"
            class="w-[280px] text-[13px] font-extralight leading-6 bg-white bg-opacity-5 px-2"
          />
        </label>
      </div>
      <label class="text-xs font-extralight leading-6 tracking-[2.4px]">
        Message
        <textarea
          name="user-message"
          class="w-[279px] h-[193px] text-[13px] font-extralight leading-6 bg-white bg-opacity-5 resize-none px-2"
        ></textarea>
      </label>

      <button
        type="submit"
        class="block text-3xl font-medium uppercase ml-auto p-2 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 transition-all duration-300 ease-linear"
      >
        Send
      </button>
    </form>
  );
}
