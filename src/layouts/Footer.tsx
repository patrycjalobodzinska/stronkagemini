import logo from '@/public/logo.png';
import Image from 'next/image';
import { AiFillMail } from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <div className="mt-auto w-full bg-gradient-to-br from-brand-800 via-[#2a4a63] to-brand-900">
      <footer className="mx-auto mt-3 flex h-full max-w-screen-2xl flex-col gap-4 px-4 pb-8 pt-2 md:gap-0 md:px-6">
        <div className="relative h-12 w-32 mb-4 -ml-2">
          <Image
            src={logo}
            alt=""
            className=" h-full  object-contain object-center w-full "
          />
        </div>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-y-2 text-sm text-white/90 md:justify-start">
          <div
            onClick={() => {
              router.push(`/cameras`);
            }}
            className="mr-2 cursor-pointer border-r border-white/20 pr-3 transition hover:text-primary"
          >
            Kamery
          </div>
          <div
            onClick={() => {
              router.push(`/doors`);
            }}
            className="mr-2 cursor-pointer border-r border-white/20 pr-3 transition hover:text-primary"
          >
            Drzwi
          </div>
          <div
            onClick={() => {
              router.push(`/garage-doors`);
            }}
            className="mr-2 cursor-pointer border-r border-white/20 pr-3 transition hover:text-primary"
          >
            Bramy
          </div>
          <div
            onClick={() => {
              router.push(`/rollers`);
            }}
            className="mr-2 cursor-pointer border-r border-white/20 pr-3 transition hover:text-primary"
          >
            Rolety
          </div>
          <div
            onClick={() => {
              router.push(`/security`);
            }}
            className="mr-2 cursor-pointer border-r border-white/20 pr-3 transition hover:text-primary"
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
                <div className="rounded-full border-2 border-primary/90 bg-primary/10 p-2 text-xl text-primary">
                  <HiPhone />
                </div>
                <div className="pl-4 ">
                  <a
                    href="tel:+48513001600"
                    className="text-lg font-medium text-white transition hover:text-primary"
                  >
                    +48 513 001 600
                  </a>{' '}
                </div>
              </div>{' '}
              <div className="flex items-center">
                <div className="rounded-full border-2 border-primary/90 bg-primary/10 p-2 text-xl text-primary">
                  <AiFillMail />
                </div>
                <div className="pl-4">
                  <a
                    href="mailto:janusz@geminirzeszow.pl"
                    className="text-lg font-medium text-white transition hover:text-primary"
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
