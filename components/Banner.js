import Image from 'next/image';
import header from '../assets/header.jpg';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]  2xl:h-[700px] '>
      <Image src={header} layout='fill' objectFit='cover' />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg text-white font-semibold '>
          Not Sure Where to go? Perfect.
        </p>
        <button className='text-purple-500 bg-white px-10 py-3 mt-5 rounded-full shadow-md font-bold hover:shadow-xl active:scale-90 transition duration-150 focus:outline-none '>
          I'm Flexible.
        </button>
      </div>
    </div>
  );
}

export default Banner;
