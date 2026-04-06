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
          <div className="mb-12 mt-16 flex flex-col items-center justify-center gap-3">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
              Kontakt
            </h2>
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-primary to-amber-300" />
          </div>
          <div className="grid md:grid-cols-2 mb-2 gap-4">
            <div className="flex flex-col md:border-r border-gray-300">
              <div className="text-xl font-semibold text-brand-navy">GEMINI</div>
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
                  <div className="flex cursor-pointer items-center justify-center gap-2 rounded-lg text-base font-medium text-brand-navy underline decoration-primary/50 underline-offset-4 transition hover:text-primary">
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
                <div className="rounded-full border-2 border-primary/80 bg-primary/10 p-2 text-2xl text-brand-navy">
                  <HiPhone />
                </div>
                <div className="pl-4">
                  <a
                    href="tel:+48513001600"
                    className="text-lg font-semibold text-brand-navy transition hover:text-primary"
                  >
                    +48 513 001 600
                  </a>{' '}
                </div>
              </div>{' '}
              <div className="flex items-center">
                <div className="rounded-full border-2 border-primary/80 bg-primary/10 p-2 text-2xl text-brand-navy">
                  <AiFillMail />
                </div>
                <div className="pl-4">
                  <a
                    href="mailto:janusz@geminirzeszow.pl"
                    className="text-lg font-semibold text-brand-navy transition hover:text-primary"
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
