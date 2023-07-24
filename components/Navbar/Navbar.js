import Link from 'next/link';
import { AiOutlineArrowRight,AiOutlineSearch } from "react-icons/ai";
import NavButton from './NavButton';
import NavItems from './NavItems';



const Navbar = () => {
  return (
    <div className='flex flex-col'>
        <DateLocation/>
        <div className='w-full flex flex-col md:flex-row-reverse items-center justify-between py-2 md:py-4 lg:py-5 xl:py-6 border-b-2 border-gray-400' >
          <div className="hidden md:flex items-center justify-end gap-x-2  flex-1">
            <AiOutlineSearch size={32} className=''/>
            <div className='h-10 aspect-square rounded-full bg-gray-500 border border-black'/>
          </div>
          <Title/>
          <div className='w-full md:w-auto md:flex-1 flex mt-6 items-center justify-between '>
            <div className='flex flex-col gap-y-1 items-start' >
              <h5 className='text-sm font-semibold leading-3'>Support The Guardian</h5>
              <p className='text-xs '>Fearless,Independent and reader-funded</p>
              <Link href="" className='py-1 px-2 text-sm border border-textColor rounded-full flex items-center gap-x-1'>Support us<AiOutlineArrowRight className='transform -rotate-45 '/>  </Link>
            </div>
            <NavButton/>
          </div>
        </div>
        <NavItems/>
    </div>
  )
}


//-------------------------------date And Location--------------------------------------------------
const DateLocation = () => {
  // Create a new Date object
  const currentDate = new Date();

  // Define options for formatting the date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  // Get the current date in the desired format
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return (
    <div className="flex items-center justify-between border-b-8 border-textColor py-2">
      <span className="text-xs sm:text-sm font-semibold">{formattedDate}</span>
      <span className="text-xs sm:text-sm font-semibold">Dhaka,Bangladesh</span>
      
    </div>
  );
};

//  -------------------------Title------------------------------------------
 const Title = () => {
   return (
     <div className='flex flex-col  text-4xl sm:text-5xl lg:text-6xl font-[800]'>
            <span className='ml-8 sm:ml-10 leading-8 sm:leading-[2.7rem] lg:leading-[3.4rem] lg:ml-12 xl:ml-12'>The</span>
            <span className='leading-3 xl:mr-[2rem]'>Guardian</span>
          </div>
   )
 }
 



export default Navbar