import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='bg-blueGray-50'>
          <div className='container mx-auto overflow-hidden'>
            <div className='flex items-center justify-between px-4 py-5 bg-blueGray-50'>
              <div className='w-auto'>
                <div className='flex flex-wrap items-center'>
                  <div className='w-auto mr-14'>
                    <a href='#'>
                      <img
                        src='images/logowithname2.svg'
                        alt=''
                        className='h-14'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-auto'>
                <div className='flex flex-wrap items-center'>
                  <div className='w-auto hidden lg:block'>
                    <ul className='flex items-center mr-16'>
                      <li className='mr-9 font-medium hover:text-gray-700'>
                        <a href='#'>Features</a>
                      </li>
                      <li className='mr-9 font-medium hover:text-gray-700'>
                        <a href='#'>Solutions</a>
                      </li>
                      <li className='mr-9 font-medium hover:text-gray-700'>
                        <a href='#'>Resources</a>
                      </li>
                      <li className='font-medium hover:text-gray-700'>
                        <a href='#'>Pricing</a>
                      </li>
                    </ul>
                  </div>
                  <div className='w-auto hidden lg:block'>
                    <div className='inline-block'>
                      <button
                        className='py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                        type='button'
                      >
                        Try 14 Days Free Trial
                      </button>
                    </div>
                  </div>
                  <div className='w-auto lg:hidden'>
                    <a href='#'>
                      <svg
                        className='navbar-burger text-indigo-600'
                        width={51}
                        height={51}
                        viewBox='0 0 56 56'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          width={56}
                          height={56}
                          rx={28}
                          fill='currentColor'
                        />
                        <path
                          d='M37 32H19M37 24H19'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
              <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
              <nav className='relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto'>
                <div className='flex flex-wrap justify-between h-full'>
                  <div className='w-full'>
                    <div className='flex items-center justify-between -m-2'>
                      <div className='w-auto p-2'>
                        <a className='inline-block' href='#'>
                          <img
                            src='flaro-assets/logos/flaro-logo-black.svg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='w-auto p-2'>
                        <a className='navbar-burger' href='#'>
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6 18L18 6M6 6L18 18'
                              stroke='#111827'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center py-16 w-full'>
                    <ul>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Features
                        </a>
                      </li>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Solutions
                        </a>
                      </li>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Resources
                        </a>
                      </li>
                      <li>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex flex-col justify-end w-full pb-8'>
                    <div className='flex flex-wrap'>
                      <div className='w-full'>
                        <div className='block'>
                          <button
                            className='py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                            type='button'
                          >
                            Try 14 Days Free Trial
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='overflow-hidden pt-16'>
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap -m-8'>
                <div className='w-full md:w-1/2 p-8'>
                  <div className='inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full'>
                    <div className='flex flex-wrap items-center -m-1'>
                      <div className='w-auto p-1'>
                        <a className='text-sm' href=''>
                          👋 We are hiring! View open roles
                        </a>
                      </div>
                      <div className='w-auto p-1'>
                        <svg
                          width={15}
                          height={15}
                          viewBox='0 0 15 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008'
                            stroke='black'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h1 className='mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none'>
                    Discover mentors that helps you grow
                  </h1>
                  <p className='mb-11 text-lg text-gray-900 font-medium md:max-w-md'>
                    Get the best-in-class group mentoring plans and professional
                    benefits for your team
                  </p>
                  <div className='flex flex-wrap -m-2.5 mb-20'>
                    <div className='w-full md:w-auto p-2.5'>
                      <div className='block'>
                        <button
                          className='py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                          type='button'
                        >
                          Join Free for 30 Days
                        </button>
                      </div>
                    </div>
                    <div className='w-full md:w-auto p-2.5'>
                      <div className='block'>
                        <button
                          className='py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200'
                          type='button'
                        >
                          <div className='flex flex-wrap justify-center items-center -m-1'>
                            <div className='w-auto p-1'>
                              <svg
                                width={19}
                                height={18}
                                viewBox='0 0 19 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z'
                                  stroke='black'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </div>
                            <div className='w-auto p-1'>
                              <span>Book a call</span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className='mb-6 text-sm text-gray-500 font-semibold uppercase'>
                    Trusted and loved by 100+ tech first teams
                  </p>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-auto p-3'>
                      <img src='flaro-assets/logos/brands/brand.png' alt='' />
                    </div>
                    <div className='w-auto p-3'>
                      <img src='flaro-assets/logos/brands/brand2.png' alt='' />
                    </div>
                    <div className='w-auto p-3'>
                      <img src='flaro-assets/logos/brands/brand3.png' alt='' />
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 p-8'>
                  <img
                    className='transform hover:-translate-y-16 transition ease-in-out duration-1000'
                    src='flaro-assets/images/headers/header.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-32 bg-white overflow-hidden'>
          <img
            className='absolute left-0 top-0'
            src='flaro-assets/images/features/elipse.svg'
            alt=''
          />
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap items-center -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <h2 className='mb-6 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight'>
                  Build better customer experiences with Rizzspace
                </h2>
                <p className='font-sans text-lg text-gray-900 leading-relaxed md:max-w-lg'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </p>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <img
                  className='transform hover:-translate-y-16 transition ease-in-out duration-1000'
                  src='flaro-assets/images/features/feature.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
        <section className='py-32 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-lg'>
                  <h2 className='mb-5 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight'>
                    All-in-one, next-gen SaaS experience
                  </h2>
                  <p className='text-gray-600 font-medium leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat tempor condimentum commodo tincidunt sit dictumst.
                    Eu placerat arcu at sem vitae eros.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='flex flex-wrap'>
                  <div className='w-full'>
                    <div className='flex flex-wrap -m-7'>
                      <div className='w-auto p-7'>
                        <div className='relative w-11 h-11 border border-blueGray-200 rounded-full'>
                          <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <svg
                              width={23}
                              height={23}
                              viewBox='0 0 23 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M11.4375 7.83333V19.75M11.4375 7.83333C11.4375 7.83333 11.4375 6.46495 11.4375 6C11.4375 4.98748 12.2583 4.16667 13.2708 4.16667C14.2834 4.16667 15.1042 4.98748 15.1042 6C15.1042 7.01252 14.2834 7.83333 13.2708 7.83333C12.7233 7.83333 11.4375 7.83333 11.4375 7.83333ZM11.4375 7.83333C11.4375 7.83333 11.4375 6.05767 11.4375 5.54167C11.4375 4.27601 10.4115 3.25 9.14583 3.25C7.88018 3.25 6.85417 4.27601 6.85417 5.54167C6.85417 6.80732 7.88018 7.83333 9.14583 7.83333C9.89548 7.83333 11.4375 7.83333 11.4375 7.83333ZM5.02083 11.5H17.8542M5.02083 11.5C4.00831 11.5 3.1875 10.6792 3.1875 9.66667C3.1875 8.65414 4.00831 7.83333 5.02083 7.83333H17.8542C18.8667 7.83333 19.6875 8.65414 19.6875 9.66667C19.6875 10.6792 18.8667 11.5 17.8542 11.5M5.02083 11.5L5.02083 17.9167C5.02083 18.9292 5.84164 19.75 6.85417 19.75H16.0208C17.0334 19.75 17.8542 18.9292 17.8542 17.9167V11.5'
                                stroke='#4F46E5'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                        </div>
                        <div className='w-px h-28 bg-blueGray-200 mx-auto' />
                      </div>
                      <div className='flex-1 p-7'>
                        <div className='md:max-w-sm pb-8'>
                          <h3 className='mb-4 text-xl font-semibold leading-normal'>
                            Shop Better
                          </h3>
                          <p className='text-gray-600 font-medium leading-relaxed'>
                            Lorem ipsum dolor sit amet, to the consectetur
                            adipiscing elit. Volutpat tempor condim.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex flex-wrap -m-7'>
                      <div className='w-auto p-7'>
                        <div className='relative w-11 h-11 border border-blueGray-200 rounded-full'>
                          <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <svg
                              width={23}
                              height={23}
                              viewBox='0 0 23 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M16.0208 8.75001V6.91668C16.0208 5.90415 15.2 5.08334 14.1875 5.08334H5.02083C4.00831 5.08334 3.1875 5.90415 3.1875 6.91668V12.4167C3.1875 13.4292 4.00831 14.25 5.02083 14.25H6.85417M8.6875 17.9167H17.8542C18.8667 17.9167 19.6875 17.0959 19.6875 16.0833V10.5833C19.6875 9.57082 18.8667 8.75001 17.8542 8.75001H8.6875C7.67498 8.75001 6.85417 9.57082 6.85417 10.5833V16.0833C6.85417 17.0959 7.67498 17.9167 8.6875 17.9167ZM15.1042 13.3333C15.1042 14.3459 14.2834 15.1667 13.2708 15.1667C12.2583 15.1667 11.4375 14.3459 11.4375 13.3333C11.4375 12.3208 12.2583 11.5 13.2708 11.5C14.2834 11.5 15.1042 12.3208 15.1042 13.3333Z'
                                stroke='#4F46E5'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                        </div>
                        <div className='w-px h-36 bg-blueGray-200 mx-auto' />
                      </div>
                      <div className='flex-1 p-7'>
                        <div className='md:max-w-sm pb-8'>
                          <h3 className='mb-4 text-xl font-semibold leading-normal'>
                            Pay Better
                          </h3>
                          <p className='text-gray-600 font-medium leading-relaxed'>
                            Lorem ipsum dolor sit amet, to the consectetur
                            adipiscing elit. Volutpat tempor condimentum.
                            Volutpat tempor condiment adipiscing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex flex-wrap -m-7'>
                      <div className='w-auto p-7'>
                        <div className='relative w-11 h-11 border border-blueGray-200 rounded-full'>
                          <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <svg
                              width={23}
                              height={23}
                              viewBox='0 0 23 23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M16.6233 15.7688C15.7915 16.6005 14.0806 18.3115 12.8512 19.5408C12.0702 20.3219 10.8051 20.3215 10.024 19.5404C8.81645 18.3329 7.13832 16.6547 6.25238 15.7688C3.38853 12.9049 3.38853 8.26173 6.25238 5.39788C9.11622 2.53404 13.7594 2.53404 16.6233 5.39788C19.4871 8.26173 19.4871 12.9049 16.6233 15.7688Z'
                                stroke='#4F46E5'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M14.1878 10.5833C14.1878 12.1021 12.9566 13.3333 11.4378 13.3333C9.91904 13.3333 8.68783 12.1021 8.68783 10.5833C8.68783 9.06455 9.91904 7.83333 11.4378 7.83333C12.9566 7.83333 14.1878 9.06455 14.1878 10.5833Z'
                                stroke='#4F46E5'
                                strokeWidth={2}
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className='flex-1 p-7'>
                        <div className='md:max-w-sm pb-8'>
                          <h3 className='mb-4 text-xl font-semibold leading-normal'>
                            Track Better
                          </h3>
                          <p className='text-gray-600 font-medium leading-relaxed'>
                            Lorem ipsum dolor sit amet, to the consectetur
                            adipiscing elit. Volutpat tempor condimentum. Lorem
                            ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-36 bg-blueGray-50 overflow-hidden'>
          <img
            className='absolute top-1/2 right-0 transform -translate-y-1/2'
            src='flaro-assets/images/pricing/gradient.svg'
            alt=''
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='flex flex-wrap lg:items-center -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-md'>
                  <h2 className='mb-16 lg:mb-52 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none'>
                    Pick a plan
                  </h2>
                  <h3 className='mb-6 text-lg text-gray-900 font-semibold leading-normal'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elemen.
                  </h3>
                  <p className='font-medium text-gray-600 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volut pat tempor condimentum commodo tincidunt sit dictumst.
                    Eu placerat arcu at sem vitae eros, purus non, eu.
                    Adipiscing vitae amet nunc volutpat sit. Enim eu integer
                    duis arcu.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-md mx-auto overflow-hidden rounded-3xl shadow-8xl'>
                  <div className='p-9'>
                    <span className='mb-7 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px'>
                      Features included:
                    </span>
                    <ul>
                      <li className='mb-4 flex items-center'>
                        <svg
                          className='mr-2'
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z'
                            stroke='#4F46E5'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <p className='font-semibold leading-normal'>
                          3 Team Members
                        </p>
                      </li>
                      <li className='mb-4 flex items-center'>
                        <svg
                          className='mr-2'
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z'
                            stroke='#4F46E5'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <p className='font-semibold leading-normal'>
                          1200+ UI Blocks
                        </p>
                      </li>
                      <li className='mb-4 flex items-center'>
                        <svg
                          className='mr-2'
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z'
                            stroke='#4F46E5'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <p className='font-semibold leading-normal'>
                          10 GB Cloud Storage
                        </p>
                      </li>
                      <li className='mb-4 flex items-center'>
                        <svg
                          className='mr-2'
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z'
                            stroke='#4F46E5'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <p className='font-semibold leading-normal'>
                          Individual Email Account
                        </p>
                      </li>
                      <li className='flex items-center'>
                        <svg
                          className='mr-2'
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z'
                            stroke='#4F46E5'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <p className='font-semibold leading-normal'>
                          Premium Support
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className='p-9 bg-white'>
                    <div className='flex flex-wrap -m-8'>
                      <div className='w-full sm:w-1/2 p-8'>
                        <span className='mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px'>
                          Pro Package
                        </span>
                        <p className='text-gray-900 font-semibold leading-normal'>
                          Best for Startups &amp; Small Businesses
                        </p>
                      </div>
                      <div className='w-full sm:w-1/2 p-8'>
                        <div className='sm:max-w-max ml-auto'>
                          <p className='font-bold'>
                            <span className='text-5xl leading-tight tracking-px-n'>
                              $49
                            </span>
                            <span className='text-lg text-gray-500 leading-snug tracking-px-n'>
                              /mo
                            </span>
                          </p>
                          <p className='font-medium text-gray-500 leading-relaxed'>
                            Billed anually
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='mt-9'>
                      <button
                        className='py-4 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                        type='button'
                      >
                        Start 14 days free trial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-24 pb-28 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='text-center max-w-lg mx-auto'>
              <h2 className='mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight'>
                Collaborate efficiently with the teams today
              </h2>
              <p className='mb-7 text-lg text-gray-600 font-medium'>
                Amet minim mollit non deserunt ullamco.
              </p>
              <div className='mb-11 md:inline-block'>
                <button
                  className='py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                  type='button'
                >
                  Join Free for 30 Days
                </button>
              </div>
              <div className='flex flex-wrap items-center justify-center -m-1'>
                <div className='w-auto p-1'>
                  <div className='flex flex-wrap'>
                    <div className='w-auto'>
                      <img
                        src='flaro-assets/images/cta/avatar-circle.png'
                        alt=''
                      />
                    </div>
                    <div className='w-auto -ml-3'>
                      <img
                        src='flaro-assets/images/cta/avatar-circle2.png'
                        alt=''
                      />
                    </div>
                    <div className='w-auto -ml-3'>
                      <img
                        src='flaro-assets/images/cta/avatar-circle3.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <div className='w-auto p-1'>
                  <p className='text-gray-600 font-medium'>
                    <span>Join</span>
                    <span className='font-bold'>250+</span>
                    <span>other startup founders</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-24 pb-36 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-4 text-6xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight'>
              Latest from Blog
            </h2>
            <p className='mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto'>
              Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condimentum vitae vel purus.
            </p>
            <div className='flex flex-wrap -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <div className='flex flex-wrap lg:items-center -m-4'>
                  <div className='w-auto p-4'>
                    <div className='overflow-hidden rounded-xl'>
                      <img
                        className='transform hover:scale-105 transition ease-in-out duration-1000'
                        src='flaro-assets/images/blog/blog.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex-1 p-4'>
                    <div className='md:max-w-xs'>
                      <div className='flex flex-col justify-between h-full'>
                        <div className='mb-6'>
                          <p className='mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px'>
                            Product
                          </p>
                          <a
                            className='inline-block hover:text-gray-800 hover:underline'
                            href='#'
                          >
                            <h3 className='text-xl font-semibold leading-normal'>
                              An IT services company that can grow your business
                            </h3>
                          </a>
                        </div>
                        <div className='flex flex-wrap items-center -m-1'>
                          <div className='w-auto p-1'>
                            <img
                              src='flaro-assets/images/blog/blog-avatar.png'
                              alt=''
                            />
                          </div>
                          <div className='w-auto p-1'>
                            <p className='text-sm font-semibold leading-relaxed'>
                              Wade Warren
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='flex flex-wrap lg:items-center -m-4'>
                  <div className='w-auto p-4'>
                    <div className='overflow-hidden rounded-xl'>
                      <img
                        className='transform hover:scale-105 transition ease-in-out duration-1000'
                        src='flaro-assets/images/blog/blog2.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex-1 p-4'>
                    <div className='md:max-w-xs'>
                      <div className='flex flex-col justify-between h-full'>
                        <div className='mb-6'>
                          <p className='mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px'>
                            Product
                          </p>
                          <a
                            className='inline-block hover:text-gray-800 hover:underline'
                            href='#'
                          >
                            <h3 className='text-xl font-semibold leading-normal'>
                              How to handle your good employee for the business
                            </h3>
                          </a>
                        </div>
                        <div className='flex flex-wrap items-center -m-1'>
                          <div className='w-auto p-1'>
                            <img
                              src='flaro-assets/images/blog/blog-avatar2.png'
                              alt=''
                            />
                          </div>
                          <div className='w-auto p-1'>
                            <p className='text-sm font-semibold leading-relaxed'>
                              Bessie Cooper
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='flex flex-wrap lg:items-center -m-4'>
                  <div className='w-auto p-4'>
                    <div className='overflow-hidden rounded-xl'>
                      <img
                        className='transform hover:scale-105 transition ease-in-out duration-1000'
                        src='flaro-assets/images/blog/blog3.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex-1 p-4'>
                    <div className='md:max-w-xs'>
                      <div className='flex flex-col justify-between h-full'>
                        <div className='mb-6'>
                          <p className='mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px'>
                            Product
                          </p>
                          <a
                            className='inline-block hover:text-gray-800 hover:underline'
                            href='#'
                          >
                            <h3 className='text-xl font-semibold leading-normal'>
                              New consulting for all kind offer related to IT
                              services
                            </h3>
                          </a>
                        </div>
                        <div className='flex flex-wrap items-center -m-1'>
                          <div className='w-auto p-1'>
                            <img
                              src='flaro-assets/images/blog/blog-avatar3.png'
                              alt=''
                            />
                          </div>
                          <div className='w-auto p-1'>
                            <p className='text-sm font-semibold leading-relaxed'>
                              Albert Flores
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='flex flex-wrap lg:items-center -m-4'>
                  <div className='w-auto p-4'>
                    <div className='overflow-hidden rounded-xl'>
                      <img
                        className='transform hover:scale-105 transition ease-in-out duration-1000'
                        src='flaro-assets/images/blog/blog4.png'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex-1 p-4'>
                    <div className='md:max-w-xs'>
                      <div className='flex flex-col justify-between h-full'>
                        <div className='mb-6'>
                          <p className='mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px'>
                            Product
                          </p>
                          <a
                            className='inline-block hover:text-gray-800 hover:underline'
                            href='#'
                          >
                            <h3 className='text-xl font-semibold leading-normal'>
                              How life insurance helps you during financial
                              insolvency
                            </h3>
                          </a>
                        </div>
                        <div className='flex flex-wrap items-center -m-1'>
                          <div className='w-auto p-1'>
                            <img
                              src='flaro-assets/images/blog/blog-avatar4.png'
                              alt=''
                            />
                          </div>
                          <div className='w-auto p-1'>
                            <p className='text-sm font-semibold leading-relaxed'>
                              Jerome Bell
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative pt-24 pb-28 bg-white overflow-hidden'>
          <img
            className='absolute right-0 top-0'
            src='flaro-assets/images/footers/gradient2.svg'
            alt=''
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='flex flex-wrap justify-between -m-8'>
              <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                <a className='inline-block' href='#'>
                  <img
                    src='images/logowithname2.svg'
                    alt=''
                  />
                </a>
              </div>
              <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                <h3 className='mb-6 font-semibold leading-normal'>Product</h3>
                <ul>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Careers
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      About Us
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Insights
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      PCI Compliance
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Intro Articles
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                <h3 className='mb-6 font-semibold leading-normal'>
                  For Developers
                </h3>
                <ul>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Docs
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Knowledge Base
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      System Status
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                <h3 className='mb-6 font-semibold leading-normal'>Resources</h3>
                <ul>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      About
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Leadership
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Press/News
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Careers/Team
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                <h3 className='mb-6 font-semibold leading-normal'>Legal</h3>
                <ul>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Docs
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Knowledge Base
                    </a>
                  </li>
                  <li className='mb-3.5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      System Status
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                      href='#'
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

