'use client';

import { useForm } from 'react-hook-form';
import FormIcon from './FormIcon';
import toast, { Toaster } from 'react-hot-toast';
import useFormPersist from 'react-hook-form-persist';
import FormButton from './FormButton';
import { ContactsData } from '@/data/contextData/contacts';

export default function ContactForm() {
  const { input } = ContactsData;

  const form = useForm();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = form;

  useFormPersist('contactForm', {
    watch,
    setValue,
  });

  const onSubmit = (data) => {
    reset();
    toast('Thank you! Your message was sent.');
  };

  return (
    <form className="form " onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="md:flex md:justify-between xl:flex-col mb-4 xl:mb-6">
        <div className="xl:flex xl:gap-5">
          <div className="mb-6 md:mb-4 xl:mb-5 flex flex-col relative ">
            <label
              htmlFor="username"
              className={
                errors.username
                  ? 'text-[#FF5757] text-xs font-extralight leading-6 tracking-[2.4px] xl:mb-[6px]  '
                  : 'text-xs font-extralight leading-6 tracking-[2.4px] xl:mb-[6px]'
              }
            >
              {input.name}
            </label>
            <input
              type="text"
              id="username"
              {...register('username', {
                required: 'Incorrect name',
                pattern: {
                  value: /^[A-Z][a-z]+\s[a-zA-Z\s\.]+/,
                  message: 'Incorrect name',
                },
              })}
              placeholder="John Smith"
              className=" w-[100%] md:w-[221px] xl:w-[293px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 px-2"
            />
            {errors.username && (
              <p className=" absolute right-0 top-[46px] xl:top-[56px] text-[#FF5757] text-xs font-extralight leading-6 tracking-[2.4px] text-right flex justify-end items-center">
                <FormIcon />
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-3 md:mb-4 flex flex-col relative">
            <label
              htmlFor="email"
              className={
                errors.username
                  ? 'text-[#FF5757] text-xs font-extralight leading-6 tracking-[2.4px] xl:mb-[6px] '
                  : 'text-xs font-extralight leading-6 tracking-[2.4px] xl:mb-[6px]'
              }
            >
              {input.mail}
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Invalid email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email',
                },
              })}
              placeholder="johnsmith@email.com"
              className="w-[100%] md:w-[221px] xl:w-[293px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 px-2"
            />
            {errors.email && (
              <p className="absolute right-0 top-[46px] xl:top-[56px] text-[#FF5757] text-xs font-extralight leading-6 tracking-[2.4px] text-right flex justify-end items-center">
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
            {input.message}
          </label>
          <textarea
            id="text"
            name="user-message"
            {...register('user-message')}
            className="w-[100%] md:w-[463px] xl:w-[610px] h-[193px] md:h-[221px] xl:h-[174px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 resize-none px-2"
          ></textarea>
        </div>
      </div>
      <FormButton />
      <Toaster />
    </form>
  );
}
