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
  return (
    <>
      <header
        className="z-[1001] sticky top-0 flex h-full items-center justify-center border-b border-slate-200/80 bg-white/85 shadow-soft backdrop-blur-md transition-all duration-300 supports-[backdrop-filter]:bg-white/70"
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
          <div className="mt-1 flex w-full items-center justify-end px-2 text-sm text-slate-600 sm:px-8">
            <div className="mr-2 flex items-center justify-center border-r border-slate-200 pr-3">
              <span className="hidden sm:inline">Zadzwoń: </span>
              <a
                href="tel:+48513001600"
                className="font-semibold text-brand-navy transition hover:text-primary"
              >
                +48 513 001 600
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <a
                rel="noreferrer"
                target="_blank"
                className="rounded-lg p-1.5 transition hover:bg-slate-100 hover:text-brand-navy"
                href={'https://www.facebook.com/gemini.monitoringkamer'}
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="rounded-lg p-1.5 transition hover:bg-slate-100 hover:text-brand-navy"
                href={'https://www.instagram.com/p/Bfv7JfjBL9F/?img_index=1'}
              >
                <BsInstagram className="text-lg" />
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
              <div className="hidden w-full items-center justify-center text-base font-medium text-brand-navy sm:flex">
                <div className="flex w-full items-center justify-end gap-1 py-1.5 px-4">
                  <button
                    type="button"
                    onClick={() => router.push(`/about`)}
                    className="rounded-xl px-4 py-2 transition hover:bg-slate-100"
                  >
                    O nas
                  </button>
                  <Menu
                    shadow="lg"
                    radius="md"
                    trigger="hover"
                    withArrow
                    offset={8}
                    arrowPosition="center"
                    position="bottom-start"
                    width={500}
                  >
                    <Menu.Target>
                      <div className="cursor-pointer rounded-xl px-4 py-2 transition hover:bg-slate-100">
                        Oferta
                      </div>
                    </Menu.Target>
                    <Menu.Dropdown className="border border-slate-100 shadow-lift">
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
                      <button
                        type="button"
                        className="rounded-xl bg-primary px-5 py-2 font-semibold text-brand-navy shadow-sm transition hover:brightness-105"
                      >
                        Kontakt
                      </button>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => router.push(`/#contact`)}
                      className="rounded-xl bg-primary px-5 py-2 font-semibold text-brand-navy shadow-sm transition hover:brightness-105"
                    >
                      Kontakt
                    </button>
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
