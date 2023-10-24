import FormIcon from './FormIcon';
import PropTypes from 'prop-types';

export const FormInput = ({ input, register, errors }) => {
  return (
    <>
      <label
        htmlFor={input.id}
        className={
          errors[input.formData]
            ? 'text-[#FF5757] text-xs font-extralight leading-6 tracking-[2.4px] xl:mb-[6px]  '
            : 'text-xs font-extralight leading-6 tracking-[2.4px] xl:mb-[6px]'
        }
      >
        {input.label}
      </label>
      <input
        type={input.type}
        id={input.id}
        {...register(input.id, {
          required: `${input.error}`,
          pattern: {
            value: input.pattern,
            message: input.error,
          },
        })}
        placeholder={input.placeholder}
        className=" w-[100%] md:w-[221px] xl:w-[293px] text-[13px] xl:text-xl font-extralight leading-6 bg-white bg-opacity-5 px-2"
      />
      {errors[input.formData] && (
        <p className=" absolute right-0 top-[46px] xl:top-[56px] text-[#FF5757] text-xs font-extralight leading-6 tracking-[2.4px] text-right flex justify-end items-center">
          <FormIcon />
          {input.error}
        </p>
      )}
    </>
  );
};

FormInput.propTypes = {
  input: PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    pattern: PropTypes.instanceOf(RegExp).isRequired,
    formData: PropTypes.string.isRequired,
  }).isRequired,
};
