import Image from 'next/image';
import PropTypes from 'prop-types';
import { ServiceData } from '@/data/contextData/services';

export default function ServiceCard({ service }) {
  const { title } = ServiceData;
  // const topClass = 135 + service.callPosition;
  // const topClass = 100 + service.callPosition;

  return (
    <div className="text-white relative h-[851px] md:h-[621px] xl:h-[779px]">
      <div className="md:flex md:gap-[170px] xl:gap-[162px]">
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] font-thin leading-[56px] md:leading-[78px] xl:leading-[119px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-6 md:mb-9 xl:mb-[23px]">
          {title.thin} <span className="font-medium">{title.bold}</span>
        </h2>
        <p className="text-[43px] leading-[52px] md:text-[67px] md:leading-[78px] xl:leading-[119px] xl:text-[98px] font-thin text-right mb-4 md:mb-0">
          <span>{service.number}</span>/
          <span className="text-white text-opacity-20">05</span>
        </p>
      </div>

      <div>
        <Image
          src={service.photo}
          alt="Service"
          className="mb-3 mx-auto md:mx-0 md:mr-auto md:mb-0 xl:mb-0 w-[280px] h-[213px] md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
        />
        <div>
          <p
            style={{ top: `${service.callPosition}px` }}
            className={`text-xs font-extralight leading-6 tracking-[2.4px] text-right mb-6 md:absolute md:top-[315px] md:left-[483px] xl:top-0 xl:left-[939px]`}
          >
            {service.callText}
          </p>

          <div>
            <p className="absolute bottom-[112px] text-sm md:text-[13px] md:bottom-[128px] md:left-[483px] md:w-[221px] xl:text-[18px] xl:bottom-[208px]  xl:left-[939px] font-extralight leading-5 xl:leading-6 xl:w-[293px] xl:text-justify">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.shape({
    number: PropTypes.string.isRequired,
    listItem: PropTypes.string.isRequired,
    callText: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
  }).isRequired,
};
