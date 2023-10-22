'use client';

import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import useFormPersist from 'react-hook-form-persist';
import FormButton from './FormButton';
import { Inputs, Textarea } from '@/data/contextData/contacts';
import { FormInput } from './FormInput';

export default function ContactForm() {
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
          {Inputs.map((input) => (
            <div
              className="mb-6 md:mb-7 xl:mb-[42px] flex flex-col relative "
              key={input.id}
            >
              <FormInput input={input} register={register} errors={errors} />
            </div>
          ))}
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor={Textarea.id}
            className="text-xs font-extralight leading-6 tracking-[2.4px] xl:mb-1"
          >
            {Textarea.label}
          </label>
          <textarea
            id={Textarea.id}
            name={Textarea.formData}
            {...register(Textarea.formData)}
            className="w-[100%] md:w-[463px] xl:w-[610px] h-[193px] md:h-[221px] xl:h-[174px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 resize-none px-2"
          ></textarea>
        </div>
      </div>
      <FormButton />
      <Toaster />
    </form>
  );
}
