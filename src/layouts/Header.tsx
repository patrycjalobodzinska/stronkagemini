import { useState } from 'react';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';
import logo from '@/public/logo.png';
import { Burger, Menu } from '@mantine/core';
import { BsInstagram } from 'react-icons/bs';
import BurgerDrawer from './BurgerDrawer';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Header = () => {
  const [openedBurger, setOpenedBurger] = useState<boolean>(false);
  const router = useRouter();
  console.log(router.pathname?.length);
  return (
    <>
      <header
        className={`z-[1001] sticky top-0 bg-gray-50 shadow-md flex  justify-center items-center h-full transition-all duration-300  `}
      >
        <a href={`/`} className=" h-full ">
          <div className="relative h-10 w-28 mt-1 cursor-pointer  ">
            <Image
              src={logo}
              alt=""
              className=" h-full  object-contain object-center w-full mb-2"
            />
          </div>
        </a>
        <div className="w-full">
          <div className=" text-sm w-full flex items-center mt-1 sm:px-8 px-2 justify-end">
            <div className="border-r  flex items-center justify-center pr-2 mr-2">
              Zadzwoń:
              <a href="tel:+48513001600">+48513001600</a>{' '}
            </div>
            <div className="flex items-center gap-2">
              <a
                rel="noreferrer"
                target="_blank"
                href={'https://www.facebook.com/gemini.monitoringkamer'}
              >
                <div>
                  <FaFacebook />
                </div>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href={'https://www.instagram.com/p/Bfv7JfjBL9F/?img_index=1'}
              >
                {' '}
                <div>
                  <BsInstagram />
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between mx-auto max-w-[1600px] p-1.5  pb-1 sm:px-1 md:px-2  gap-6">
            <div className="flex items-center   justify-between w-full    ">
              <div className="flex sm:hidden w-full items-end justify-end">
                {' '}
                <Burger
                  opened={openedBurger}
                  onClick={() => setOpenedBurger((state) => !state)}
                  color="#fcdf2a"
                />
              </div>
              <div className="hidden sm:flex text-[#002c59] font-medium text-base    items-center justify-center   w-full">
                <div className="flex items-center  justify-end w-full gap-7 py-1 px-4">
                  <button onClick={() => router.push(`/about`)}>O nas</button>
                  <Menu
                    shadow="md"
                    trigger="hover"
                    withArrow
                    offset={4.5}
                    arrowPosition="center"
                    position="bottom-start"
                    width={500}
                  >
                    <Menu.Target>
                      <div className="cursor-pointer">Oferta</div>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <div className="grid grid-cols-2">
                        <Menu.Item onClick={() => router.push(`/doors`)}>
                          <div className=" text-lg flex leading-4 flex-col">
                            Drzwi
                            <div className="text-xs font-nprmal text-gray-400">
                              wewnętrzne i zewnętrzne
                            </div>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div
                            onClick={() => router.push(`/garage-doors`)}
                            className="text-lg flex leading-4 flex-col"
                          >
                            Bramy{' '}
                            <div className="text-xs font-nprmal text-gray-400">
                              wjazdowe, garażowe
                            </div>{' '}
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div
                            onClick={() => router.push(`/cameras`)}
                            className="text-lg flex leading-4 flex-col"
                          >
                            Kamery
                            <div className="text-xs font-nprmal text-gray-400">
                              cyfrowe, wi-fi, analogowe
                            </div>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div
                            onClick={() => router.push(`/security`)}
                            className="text-lg flex leading-4 flex-col"
                          >
                            Alarmy
                            <div className="text-xs font-nprmal text-gray-400">
                              czujki,centrale,gotowe zestawy
                            </div>
                          </div>
                        </Menu.Item>

                        {/* <Menu.Item>
                          <div
                            onClick={() => router.push(`/vacuum`)}
                            className="text-lg flex leading-4 flex-col"
                          >
                            Odkurzacze centralne
                            <div className="text-xs font-nprmal text-gray-400">
                              Hide-A-Hose
                            </div>
                          </div>
                        </Menu.Item> */}
                        <Menu.Item>
                          <div
                            onClick={() => router.push(`/rollers`)}
                            className="text-lg flex leading-4 flex-col"
                          >
                            Rolety
                            <div className="text-xs font-nprmal text-gray-400">
                              zewnetrzne, żaluzje
                            </div>
                          </div>
                        </Menu.Item>
                        {/* <Menu.Item>
                          <div
                            onClick={() => router.push(`/automation`)}
                            className="flex text-lg leading-4 flex-col"
                          >
                            Automatyzacja domu
                            <div className="text-xs font-nprmal text-gray-400">
                              smart home, wideodomofony, kontrola dostępu
                            </div>
                          </div>
                        </Menu.Item> */}
                      </div>
                    </Menu.Dropdown>
                  </Menu>
                  {router.pathname?.length < 2 ? (
                    <Link href="#contact">
                      <button className="">Kontakt</button>
                    </Link>
                  ) : (
                    <div onClick={() => router.push(`/#contact`)}>
                      <button className="">Kontakt</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <BurgerDrawer open={openedBurger} setOpen={setOpenedBurger} />
    </>
  );
};

export default Header;
