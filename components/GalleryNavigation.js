import PropTypes from 'prop-types';

export function GalleryNavigation({ goPrev, goNext }) {
  return (
    <div className="hidden md:absolute md:bottom-[17px] md:px-[38px] md:w-[704px] md:z-20 md:flex md:justify-between xl:px-[200px] xl:w-[1232px]  xl:bottom-0">
      <button
        type="button"
        ref={goPrev}
        className="md:text-[33px] md:font-thin md:leading-[40px] uppercase hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 transition-all duration-500 ease-linear"
      >
        Back
      </button>
      <button
        type="button"
        ref={goNext}
        className="md:text-[33px] md:font-thin md:leading-[40px] uppercase hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 transition-all duration-500 ease-linear"
      >
        Next
      </button>
    </div>
  );
}

GalleryNavigation.propTypes = {
  goPrev: PropTypes.shape({
    current: PropTypes.object,
  }),
  goNext: PropTypes.shape({
    current: PropTypes.object,
  }),
};
