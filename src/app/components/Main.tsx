import React from 'react'

export default function Main() {
  return (
    <>
      <main>
        <div className="px-4 pt-6">
          <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">


            {/* <!-- Main widget --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6 ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-shrink-0">
                  <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl ">$45,385</span>
                  <h3 className="text-base font-light text-gray-500 ">Sales this week</h3>
                </div>
                <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500">
                  12.5%
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>


              {/* <!-- Card Footer --> */}
              <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6">
                <div>
                  <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 " type="button" data-dropdown-toggle="weekly-sales-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  {/* <!-- Dropdown menu --> */}
                  <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow " id="weekly-sales-dropdown">
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm font-medium text-gray-900 truncate " role="none">
                        Sep 16, 2021 - Sep 22, 2021
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">Yesterday</a>
                      </li>

                    </ul>
                    <div className="py-1" role="none">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 d" role="menuitem">Custom...</a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 ">
                    Sales Report
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--Tabs widget --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm ">
              <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 ">Statistics this month
                <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button"><svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg><span className="sr-only">Show information</span></button>
              </h3>
              <div data-popover id="popover-description" role="tooltip" className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72">
                <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-gray-900">Statistics</h3>
                  <p>Statistics is a branch of applied mathematics that involves the collection, description, analysis, and inference of conclusions from quantitative data.</p>
                  <a href="#" className="flex items-center font-medium text-primary-600 hover:text-primary-700">Read more <svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></a>
                </div>
                <div data-popper-arrow></div>
              </div>
              <div className="sm:hidden">
                <label className="sr-only">Select tab</label>
                <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                  <option>Statistics</option>
                  <option>Services</option>
                  <option>FAQ</option>
                </select>
              </div>
              <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li className="w-full">
                  <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none">Top products</button>
                </li>
                <li className="w-full">
                  <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none ">Top Customers</button>
                </li>
              </ul>
              <div id="fullWidthTabContent" className="border-t border-gray-200">
                <div className="hidden pt-4" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                  <ul role="list" className="divide-y divide-gray-200">
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate">
                              iPhone 14 Pro
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                              </svg>
                              2.5%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                          $445,467
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate ">
                              Apple iMac 27&quot;
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                              </svg>
                              12.5%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                          $256,982
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/watch.png" alt="watch image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate ">
                              Apple Watch SE
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-red-600">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                              </svg>
                              1.35%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                          $201,869
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/ipad.png" alt="ipad image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate ">
                              Apple iPad Air
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 ">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                              </svg>
                              12.5%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                          $103,967
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0">
                          <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900 truncate ">
                              Apple iMac 24&quot;
                            </p>
                            <div className="flex items-center justify-end flex-1 text-sm text-red-600 ">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                              </svg>
                              2%
                              <span className="ml-2 text-gray-500">vs last month</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                          $98,543
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
              {/* <!-- Card Footer --> */}
              <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6">
                <div>
                  <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900" type="button" data-dropdown-toggle="stats-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  {/* <!-- Dropdown menu --> */}
                  <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="stats-dropdown">
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm font-medium text-gray-900 truncate" role="none">
                        Sep 16, 2021 - Sep 22, 2021
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Yesterday</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Today</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Last 7 days</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Last 30 days</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Last 90 days</a>
                      </li>
                    </ul>
                    <div className="py-1" role="none">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Custom...</a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100">
                    Full Report
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex sm:p-6">
              <div className="w-full">
                <h3 className="text-base font-normal text-gray-500">New products</h3>
                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">2,340</span>
                <p className="flex items-center text-base font-normal text-gray-500">
                  <span className="flex items-center mr-1.5 text-sm text-green-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                    </svg>
                    12.5%
                  </span>
                  Since last month
                </p>
              </div>
              <div className="w-full" id="new-products-chart"></div>
            </div>
            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex sm:p-6">
              <div className="w-full">
                <h3 className="text-base font-normal text-gray-500">Users</h3>
                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">2,340</span>
                <p className="flex items-center text-base font-normal text-gray-500">
                  <span className="flex items-center mr-1.5 text-sm text-green-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                    </svg>
                    3,4%
                  </span>
                  Since last month
                </p>
              </div>
              <div className="w-full" id="week-signups-chart"></div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6">
              <div className="w-full">
                <h3 className="mb-2 text-base font-normal text-gray-500">Audience by age</h3>
                <div className="flex items-center mb-2">
                  <div className="w-16 text-sm font-medium">50+</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-16 text-sm font-medium">40+</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-16 text-sm font-medium">30+</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-16 text-sm font-medium">20+</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              <div id="traffic-channels-chart" className="w-full"></div>
            </div>
          </div>



        </div>
      </main>
    </>
  )
}
