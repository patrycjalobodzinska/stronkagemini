const HomePage = () => {
  return (
    <div>
      <div
        className={` relative bg-gray-800  max-h-[50rem] h-[calc(100vh-150px)] sm:h-[calc(100vh-80px)] w-screen max-w-[1600px] mb-12`}
      >
        <div className="relative max-h-[50rem] h-full w-full ">
          <img
            className=" h-full top-0 inset-x-0 object-cover w-full my-2"
            style={{
              opacity: '30%',
              // objectFit: 'cover',
              // objectPosition: 'center',
              // maxHeight: '50rem',
              // height: '100%',
              // width: '100%',
            }}
            src={'Postprodukcja_4.png'}
            alt=""
          />
        </div>
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden  ">
          <div style={{ height: '150px', overflow: 'hidden' }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: '100%', width: '100%' }}
            >
              <path
                d="M-17.81,52.09 C384.06,179.09 387.81,-30.90 565.31,65.09 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: 'none', fill: '#d4d4d8' }}
              ></path>
            </svg>
          </div>
        </div>{' '}
        <div className="absolute  -bottom-1 left-0 w-full overflow-hidden ">
          <div style={{ height: '150px', overflow: 'hidden' }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: '100%', width: '100%' }}
            >
              <path
                d="M-10.94,79.09 C418.43,176.08 385.94,-49.90 545.94,28.09 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: 'none', fill: '#FFFFFF' }}
              ></path>
            </svg>
          </div>
        </div>{' '}
        <div className="absolute sm:top-32 top-4 h-full  max-h-[50rem]   left-0 lg:px-44 px-10 md:px-16 flex items-start justify-end w-full">
          <div className="w-full flex  gap-1 flex-col items-start justify-start text-start ">
            <div className="border-l-2 border-gray-300  pl-4 mt-6">
              {' '}
              <div className="sm:text-6xl text-3xl font-normal text-gray-200">
                Profesjonalne
              </div>{' '}
              <div className="sm:text-6xl text-3xl  font-normal text-gray-200">
                zabezpieczenie
              </div>
              <div className="sm:text-6xl text-3xl font-semibold text-primary flex gap-2 text">
                Twojego{' '}
                <div className="sm:text-6xl text-3xl font-normal text-gray-200">
                  domu
                </div>
              </div>
              <div className="sm:w-[24rem] w-full mt-5 text-base  text-gray-200">
                Zapewnij wszystkie potrzeby związane z bezpieczeństwem i
                automatyzacją Twojego domu.
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex border-r px-2 flex-col font-semibold text-primary  items-start justify-center text-[2rem]">
                23
                <span className="text-xs font-normal  text-[#eee7b8]">
                  Lata doświadczenia
                </span>
              </div>
              <div className="flex flex-col px-2 border-r font-semibold text-primary  items-start justify-center text-[2rem]">
                10
                <span className="text-xs font-normal  text-[#eee7b8]">
                  Rodzajów usług
                </span>
              </div>{' '}
              <div className="flex flex-col  px-2 font-semibold text-primary  items-start justify-center text-[2rem]">
                100+
                <span className="text-xs font-normal  text-[#eee7b8]">
                  Realizacji
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-14 relative border-[0.5rem] overflow-hidden hidden md:block border-white rounded-full shadow-xl w-[26rem] h-[27rem]">
            <img
              src={'img12.jpg'}
              alt=""
              className=" w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/* <svg
        fill="#FFFFFF"
        style={{
          position: "relative",
          display: "block",
          width: "calc(108% + 1.3px)",
          height: "58px",
          background: "",
        }}
      /> */}
        {/* <div className="absolute -bottom-20 w-full flex items-center justify-center ">
        {" "}
        <Section />
      </div> */}
      </div>{' '}
    </div>
  );
};
export default HomePage;

// Działamy na rynku od ponad 20 lat

// z Naszych usłu skorzystało ponad 500 klientów

// indywidualny i profesjonalny dobór elementów systemu monitoringu,
// wyceny z dojazdem do klienta,

// Zaufaj liderowi branży
