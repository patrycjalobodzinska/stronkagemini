import dynamic from 'next/dynamic';
import { HiPhone } from 'react-icons/hi';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidDirectionRight } from 'react-icons/bi';

const Map = dynamic(() => import('@/modules/Map'), {
  ssr: false,
});
const Location = () => {
  return (
    <>
      <div id="contact" className="flex w-full flex-col -mt-6 pt-6">
        <div className=" flex flex-col gap-2 md:px-8 px-2">
          <div className="mt-16 flex items-center mb-12 justify-center flex-col gap-4 text-4xl text-gray-700 font-semibold">
            Kontakt
            <div className="border-2 rounded-full w-12 border-primary"></div>
          </div>
          <div className="grid md:grid-cols-2 mb-2 gap-4">
            <div className="flex flex-col md:border-r border-gray-300">
              <div className="font-semibold text-xl">GEMINI</div>
              <div>al. Tadeusza Rejtana 36</div>
              <div className="mb-1">35-310 Rzeszów</div>
              <div className="flex items-start justify-start mb-6">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={
                    'https://www.google.pl/maps/dir//GEMINI+-+MONITORING,+KAMERY,+DRZWI+GERDA,+DRE,+BRAMY+GARA%C5%BBOWE,+ALARMY,+CENTRALNE+ODKURZACZE,+al.+Tadeusza+Rejtana+36,+35-326+Rzesz%C3%B3w/@50.0204411,22.0142894,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x473cfa5ca791fab3:0x451fbfbf7d4e404c!2m2!1d22.0142894!2d50.0204411!3e0?entry=ttu'
                  }
                >
                  <div className="transition-all flex cursor-pointer  gap-2 justify-center items-center text-base text-blue-600  underline  hover:text-blue-500 rounded-md">
                    <div className="flex items-center   h-full justify-center">
                      <BiSolidDirectionRight size={20} />
                    </div>{' '}
                    Wyznacz trasę
                  </div>
                </a>{' '}
              </div>
              <div>NIP: 8133228373</div>
              <div>REGON: 371017763</div>
            </div>{' '}
            <div className="flex flex-col md:pl-4 gap-2">
              <div className="flex items-center">
                <div className="text-2xl border-2 border-primary p-1.5 text-primary  rounded-full">
                  <HiPhone />
                </div>
                <div className="pl-4">
                  <a
                    href="tel:+48513001600"
                    className="underline font-semibold text-lg"
                  >
                    +48513001600
                  </a>{' '}
                </div>
              </div>{' '}
              <div className="flex items-center">
                <div className="text-2xl border-2 border-primary p-1.5 text-primary  rounded-full">
                  <AiFillMail />
                </div>
                <div className="pl-4">
                  <a
                    href="mailto:+48513001600"
                    className="underline font-semibold text-lg"
                  >
                    janusz@geminirzeszow.pl
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Location;
