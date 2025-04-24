import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="w-full container mx-auto py-20 overflow-hidden flex flex-col sm:flex-row sm:items-center items-start">
      <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left mb-8 sm:mb-0">
        Creators of the product that is changing the world
      </div>
      <div className="relative overflow-hidden">
        <div className="flex transform-gpu animate-[marquee_15s_linear_infinite] whitespace-nowrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="mx-12 object-contain opacity-70 hover:grayscale-0 hover:opacity-100 transition-all h-[170px] w-70"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="mx-12 object-contain opacity-70 hover:grayscale-0 hover:opacity-100 transition-all h-[170px] w-70"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;