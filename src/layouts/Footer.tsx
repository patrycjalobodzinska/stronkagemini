import logo from '@/public/logo.png';
import Image from 'next/image';
import { AiFillMail } from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <div className="mt-auto w-full bg-[#2f495e] ">
      <footer className="max-w-screen-2xl pb-4  mx-auto  h-full  mt-3 flex flex-col gap-4 px-4 md:px-6 md:gap-0 ">
        <div className="relative h-12 w-32 mb-4 -ml-2">
          <Image
            src={logo}
            alt=""
            className=" h-full  object-contain object-center w-full "
          />
        </div>
        <div className="flex gap-y-2 flex-wrap items-center justify-center md:justify-start text-white text-sm mb-8 ">
          <div
            onClick={() => {
              router.push(`/cameras`);
            }}
            className="border-r pr-2 mr-2 cursor-pointer transition-all hover:underline"
          >
            Kamery
          </div>
          <div
            onClick={() => {
              router.push(`/doors`);
            }}
            className="border-r pr-2 mr-2 cursor-pointer transition-all hover:underline"
          >
            Drzwi
          </div>
          <div
            onClick={() => {
              router.push(`/garage-doors`);
            }}
            className="border-r pr-2 mr-2 cursor-pointer transition-all hover:underline"
          >
            Bramy
          </div>
          <div
            onClick={() => {
              router.push(`/rollers`);
            }}
            className="border-r pr-2 mr-2 cursor-pointer transition-all hover:underline"
          >
            Rolety
          </div>
          <div
            onClick={() => {
              router.push(`/security`);
            }}
            className="border-r pr-2 mr-2 cursor-pointer transition-all hover:underline"
          >
            Alarmy
          </div>

          {/* <div
            onClick={() => {
              router.push(`/automation`);
            }}
            className="border-r pr-2 mr-2 cursor-pointer transition-all hover:underline"
          >
            Automatyka domu
          </div>
          <div
            onClick={() => {
              router.push(`/vacuum`);
            }}
            className="cursor-pointer transition-all hover:underline"
          >
            Odkurzacze centralne
          </div> */}
        </div>
        <div className=" h-full grid md:grid-cols-2 mb-2 gap-5 text-white">
          <div className="flex flex-col text-base border-gray-300">
            <div className="">GEMINI</div>
            <div>al. Tadeusza Rejtana 36</div>
            <div className="mb-3">35-310 Rzeszów</div>

            <div>NIP: 8133228373</div>
            <div>REGON: 371017763</div>
          </div>{' '}
          <div className="flex flex-col md:pl-4 gap-2 mr-6 md:items-end">
            <div className="flex flex-col md:pl-4 gap-5">
              {' '}
              <div className="flex items-center">
                <div className="text-xl border-2 border-primary p-1.5 text-primary  rounded-full">
                  <HiPhone />
                </div>
                <div className="pl-4 ">
                  <a
                    href="tel:+48513001600"
                    className="underline font-medium text-lg"
                  >
                    +48513001600
                  </a>{' '}
                </div>
              </div>{' '}
              <div className="flex items-center">
                <div className="text-xl border-2 border-primary p-1.5 text-primary  rounded-full">
                  <AiFillMail />
                </div>
                <div className="pl-4">
                  <a
                    href="mailto:+48513001600"
                    className="underline font-medium text-lg"
                  >
                    janusz@geminirzeszow.pl
                  </a>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
