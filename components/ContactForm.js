'use client';

import { useForm } from 'react-hook-form';
import FormIcon from './FormIcon';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const form = useForm();
  const { register, handleSubmit, reset, formState } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    reset();
    toast('Thank you! Your message was sent.');
    console.log('Form submitted', data);
  };

  return (
    <form className="form " onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="md:flex md:justify-between xl:flex-col mb-4 xl:mb-6">
        <div className="xl:flex xl:gap-5">
          <div className="mb-6 md:mb-4 xl:mb-5 flex flex-col  ">
            <label
              htmlFor="username"
              className="text-xs xl:text-xl font-extralight leading-6 tracking-[2.4px] xl:mb-[6px]"
            >
              Full name
            </label>
            <input
              type="text"
              id="username"
              {...register('username', {
                required: {
                  value: true,
                  message: 'Incorrect name',
                },
              })}
              placeholder="John Smith"
              className="w-[280px] md:w-[221px] xl:w-[293px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 px-2"
            />
            {errors.username && (
              <p className="text-[#FF5757] text-xs font-extralight leading-6 tracking-[2.4px] text-right flex justify-end items-center">
                <FormIcon />
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-3 md:mb-4 flex flex-col">
            <label
              htmlFor="email"
              className="text-xs xl:text-xl font-extralight leading-6 tracking-[2.4px] xl:mb-[6px]"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Invalid email',
                },
              })}
              placeholder="johnsmith@email.com"
              className="w-[280px] md:w-[221px] xl:w-[293px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 px-2"
            />
            {errors.email && (
              <p className="text-[#FF5757] text-xs font-extralight leading-6 tracking-[2.4px] text-right flex justify-end items-center">
                <FormIcon />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col ">
          <label
            htmlFor="text"
            className="text-xs xl:text-xl font-extralight leading-6 tracking-[2.4px] xl:mb-1"
          >
            Message
          </label>
          <textarea
            id="text"
            name="user-message"
            className="w-[279px] md:w-[463px] xl:w-[610px] h-[193px] md:h-[221px] xl:h-[174px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 resize-none px-2"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="block text-3xl xl:text-[32px] font--medium uppercase ml-auto p-2 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 transition-all duration-300 ease-linear"
      >
        Send
      </button>
      <Toaster />
    </form>
  );
}
