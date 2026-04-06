import { Drawer, ScrollArea } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IBurgerDrawer {
  open: boolean;
  setOpen: (_val: boolean) => void;
}

const BurgerDrawer = ({ open, setOpen }: IBurgerDrawer) => {
  const router = useRouter();
  return (
    <Drawer
      opened={open}
      onClose={() => setOpen(false)}
      transitionDuration={150}
      transitionTimingFunction="ease"
      lockScroll={false}
      className="z-[1002]"
      padding={'xl'}
    >
      {' '}
      <div className="w-full h-screen flex flex-col">
        <ScrollArea
          type="hover"
          style={{
            height: 'calc(100vh-61px)',
          }}
          scrollbarSize={8}
        >
          <Link href="#contact">
            <button
              className="peer py-4 transition justify-start w-full text-black flex items-center gap-2 border-b"
              tabIndex={1}
              onClick={() => setOpen(false)}
            >
              <div className=" text-left font-bold text-blue-800 text-lg flex leading-4 flex-col">
                Kontakt
              </div>
            </button>
          </Link>
          <button
            onClick={() => {
              router.push(`/doors`), setOpen(false);
            }}
            className="peer py-4 transition justify-start w-full text-black flex items-center gap-2 border-b"
            tabIndex={1}
          >
            <div className=" text-left font-semibold text-lg flex leading-4 flex-col">
              Drzwi
              <div className="text-sm font-nprmal font-normal text-gray-400">
                wewnętrzne i zewnętrzne
              </div>
            </div>
          </button>
          <button
            onClick={() => {
              router.push(`/garage-doors`), setOpen(false);
            }}
            className="peer py-4 transition justify-start w-full text-black flex items-center gap-2 border-b"
            tabIndex={1}
          >
            <div className=" text-left font-semibold text-lg flex leading-4 flex-col">
              Bramy{' '}
              <div className="text-sm font-nprmal font-normal text-gray-400">
                wjazdowe, garażowe
              </div>
            </div>
          </button>{' '}
          <button
            onClick={() => {
              router.push(`/cameras`), setOpen(false);
            }}
            className="peer py-4 transition justify-start w-full text-black flex items-center gap-2 border-b"
            tabIndex={1}
          >
            <div className=" text-left font-semibold text-lg flex leading-4 flex-col">
              Kamery
              <div className="text-sm font-nprmal font-normal text-gray-400">
                cyfrowe, wi-fi, analogowe
              </div>
            </div>
          </button>{' '}
          <button
            onClick={() => {
              router.push(`/security`), setOpen(false);
            }}
            className="peer py-4 transition justify-start w-full text-black flex items-center gap-2 border-b"
            tabIndex={1}
          >
            <div className=" text-left font-semibold text-lg flex leading-4 flex-col">
              Alarmy
              <div className="text-sm font-nprmal font-normal text-gray-400">
                czujki,centrale,gotowe zestawy
              </div>
            </div>
          </button>{' '}
          {/* <button
            onClick={() => {
              router.push(`/vacuum`), setOpen(false);
            }}
            className="peer py-4 transition justify-start w-full text-black flex items-center gap-2 border-b"
            tabIndex={1}
          >
            <div className=" text-left font-semibold text-lg flex leading-4 flex-col">
              Odkurzacze centralne
              <div className="text-sm font-nprmal font-normal text-gray-400">
                Hide-A-Hose
              </div>
            </div>
          </button>{' '} */}
          <button
            onClick={() => {
              router.push(`/rollers`), setOpen(false);
            }}
            className="peer py-4 transition justify-start w-full text-black flex items-center gap-2 border-b"
            tabIndex={1}
          >
            <div className=" text-left font-semibold text-lg flex leading-4 flex-col">
              Rolety
              <div className="text-sm font-nprmal font-normal text-gray-400">
                zewnetrzne, żaluzje
              </div>
            </div>
          </button>{' '}
          {/* <button
            onClick={() => {
              router.push(`/automation`), setOpen(false);
            }}
            className="peer py-4 transition justify-start w-full text-black flex items-center gap-2 border-b"
            tabIndex={1}
          >
            <div className=" text-left font-semibold text-lg flex leading-4 flex-col">
              Automatyzacja domu
              <div className="text-sm font-nprmal font-normal text-gray-400">
                smart home, wideodomofony, kontrola dostępu
              </div>
            </div>
          </button> */}
        </ScrollArea>{' '}
      </div>
    </Drawer>
  );
};

export default BurgerDrawer;
