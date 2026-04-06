const HomePage = () => {
  return (
    <div>
      <div
        className={`relative mb-12 h-[calc(100vh-150px)] max-h-[50rem] w-screen max-w-[1600px] overflow-hidden rounded-b-[2rem] bg-slate-900 sm:h-[calc(100vh-80px)]`}
      >
        <div className="relative h-full max-h-[50rem] w-full">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.45 }}
            src={'Postprodukcja_4.png'}
            alt=""
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-[#002c59]/55 to-slate-900/80"
            aria-hidden
          />
        </div>
        <div className="absolute -bottom-px left-0 w-full overflow-hidden">
          <div className="h-[120px] overflow-hidden sm:h-[150px]">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M-17.81,52.09 C384.06,179.09 387.81,-30.90 565.31,65.09 L500.00,150.00 L0.00,150.00 Z"
                className="fill-brand-100"
              />
            </svg>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 w-full overflow-hidden">
          <div className="h-[120px] overflow-hidden sm:h-[150px]">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M-10.94,79.09 C418.43,176.08 385.94,-49.90 545.94,28.09 L500.00,150.00 L0.00,150.00 Z"
                className="fill-brand-50"
              />
            </svg>
          </div>
        </div>
        <div className="absolute left-0 top-4 flex h-full max-h-[50rem] w-full items-start justify-end px-6 sm:top-32 md:px-16 lg:px-44">
          <div className="flex w-full flex-col items-start justify-start gap-6 text-start">
            <div className="mt-6 max-w-xl border-l-4 border-primary pl-5">
              <h1 className="text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
                <span className="block font-normal text-slate-100">
                  Profesjonalne
                </span>
                <span className="block font-normal text-slate-100">
                  zabezpieczenie
                </span>
                <span className="mt-1 flex flex-wrap items-baseline gap-2">
                  <span className="font-semibold text-primary">Twojego</span>
                  <span className="font-normal text-slate-100">domu</span>
                </span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-200/95 sm:text-lg">
                Zapewnij wszystkie potrzeby związane z bezpieczeństwem i
                automatyzacją Twojego domu.
              </p>
            </div>
            <div className="grid w-full max-w-lg grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 backdrop-blur-sm sm:px-4">
                <div className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                  23
                </div>
                <span className="text-[11px] font-medium uppercase tracking-wide text-slate-300 sm:text-xs">
                  Lata doświadczenia
                </span>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 backdrop-blur-sm sm:px-4">
                <div className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                  10
                </div>
                <span className="text-[11px] font-medium uppercase tracking-wide text-slate-300 sm:text-xs">
                  Rodzajów usług
                </span>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 backdrop-blur-sm sm:px-4">
                <div className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                  100+
                </div>
                <span className="text-[11px] font-medium uppercase tracking-wide text-slate-300 sm:text-xs">
                  Realizacji
                </span>
              </div>
            </div>
          </div>
          <div className="relative mt-14 hidden h-[27rem] w-[26rem] overflow-hidden rounded-[2rem] border-4 border-white/90 shadow-lift md:block">
            <img
              src={'img12.jpg'}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
