import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-600 h-full flex justify-center'>

      <div class="lg:w-[70%] w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6 flxe justify-center" action="#">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center">EVALUATION FORM</h2>
          <div className='grid lg:justify-end'>
            <div>
              <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Code</label>
              <input type="number" name="Project Code" id="projectCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Project Code" required />
            </div>
            <label for="year" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Year</label>
            <select id="year" class=" px-4 py-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Select Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <label for="type" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Type</label>
            <select id="type" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Select Type</option>
              <option value="Presentaion">Presentaion</option>
              <option value="Poster">Poster</option>

            </select>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center">JUDGING CRITERIA</h2>
          <br />
          <div className='w-full flex justify-around'>
            <h4>Technical Quality</h4>
            <h4>70%(Point)</h4>
          </div>
          <div className='md:flex md:justify-around my-10'>
            <div className='md:w-1/2'>
              <h2 class="bg-gray-50 border border-gray-500 text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">Introduction/ Background/ literature
                (clear)</h2>
            </div>
            <div>
              <ul class="flex justify-between mt-5 md:mt-0">
                <li>
                  <input type="radio" id="number10" name="hosting" value="number10" class="hidden peer" required />
                  <label for="number10" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    10
                  </label>
                </li>
                <li>
                  <input type="radio" id="number9" name="hosting" value="number9" class="hidden peer" required />
                  <label for="number9" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    9
                  </label>
                </li><li>
                  <input type="radio" id="number8" name="hosting" value="number8" class="hidden peer" required />
                  <label for="number8" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    8
                  </label>
                </li><li>
                  <input type="radio" id="number7" name="hosting" value="number7" class="hidden peer" required />
                  <label for="number7" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    7
                  </label>
                </li><li>
                  <input type="radio" id="number6" name="hosting" value="number6" class="hidden peer" required />
                  <label for="number6" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    6
                  </label>
                </li><li>
                  <input type="radio" id="number5" name="hosting" value="number5" class="hidden peer" required />
                  <label for="number5" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    5
                  </label>
                </li><li>
                  <input type="radio" id="number4" name="hosting" value="number4" class="hidden peer" required />
                  <label for="number4" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    4
                  </label>
                </li><li>
                  <input type="radio" id="number3" name="hosting" value="number3" class="hidden peer" required />
                  <label for="number3" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    3
                  </label>
                </li>
              </ul>
            </div>

          </div>
          <div className='md:flex md:justify-around my-10'>
            <div className='md:w-1/2'>
              <h2 class="bg-gray-50 border border-gray-500 text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">Introduction/ Background/ literature
                (clear)</h2>
            </div>
            <div>
              <ul class="flex justify-between mt-5 md:mt-0">
                <li>
                  <input type="radio" id="number20" name="hosting" value="number20" class="hidden peer" required />
                  <label for="number20" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    10
                  </label>
                </li>
                <li>
                  <input type="radio" id="number19" name="hosting" value="number19" class="hidden peer" required />
                  <label for="number19" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    9
                  </label>
                </li><li>
                  <input type="radio" id="number18" name="hosting" value="number18" class="hidden peer" required />
                  <label for="number18" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    8
                  </label>
                </li><li>
                  <input type="radio" id="number17" name="hosting" value="number17" class="hidden peer" required />
                  <label for="number17" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    7
                  </label>
                </li><li>
                  <input type="radio" id="number16" name="hosting" value="number16" class="hidden peer" required />
                  <label for="number16" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    6
                  </label>
                </li><li>
                  <input type="radio" id="number15" name="hosting" value="number15" class="hidden peer" required />
                  <label for="number15" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    5
                  </label>
                </li><li>
                  <input type="radio" id="number14" name="hosting" value="number14" class="hidden peer" required />
                  <label for="number14" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    4
                  </label>
                </li><li>
                  <input type="radio" id="number13" name="hosting" value="number13" class="hidden peer" required />
                  <label for="number13" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    3
                  </label>
                </li>



              </ul>
            </div>

          </div><div className='md:flex md:justify-around my-10'>
            <div className='md:w-1/2'>
              <h2 class="bg-gray-50 border border-gray-500 text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">Introduction/ Background/ literature
                (clear)</h2>
            </div>
            <div>
              <ul class="flex justify-between mt-5 md:mt-0">
                <li>
                  <input type="radio" id="number30" name="hosting" value="number30" class="hidden peer" required />
                  <label for="number30" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    10
                  </label>
                </li>
                <li>
                  <input type="radio" id="number29" name="hosting" value="number29" class="hidden peer" required />
                  <label for="number29" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    9
                  </label>
                </li><li>
                  <input type="radio" id="number28" name="hosting" value="number28" class="hidden peer" required />
                  <label for="number28" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    8
                  </label>
                </li><li>
                  <input type="radio" id="number27" name="hosting" value="number27" class="hidden peer" required />
                  <label for="number27" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    7
                  </label>
                </li><li>
                  <input type="radio" id="number26" name="hosting" value="number26" class="hidden peer" required />
                  <label for="number26" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    6
                  </label>
                </li><li>
                  <input type="radio" id="number25" name="hosting" value="number25" class="hidden peer" required />
                  <label for="number25" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    5
                  </label>
                </li><li>
                  <input type="radio" id="number24" name="hosting" value="number24" class="hidden peer" required />
                  <label for="number24" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    4
                  </label>
                </li><li>
                  <input type="radio" id="number23" name="hosting" value="number23" class="hidden peer" required />
                  <label for="number23" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    3
                  </label>
                </li>



              </ul>
            </div>

          </div><div className='md:flex md:justify-around my-10'>
            <div className='md:w-1/2'>
              <h2 class="bg-gray-50 border border-gray-500 text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">Introduction/ Background/ literature
                (clear)</h2>
            </div>
            <div>
              <ul class="flex justify-between mt-5 md:mt-0">
                <li>
                  <input type="radio" id="40" name="hosting" value="40" class="hidden peer" required />
                  <label for="40" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    10
                  </label>
                </li>
                <li>
                  <input type="radio" id="number39" name="hosting" value="number39" class="hidden peer" required />
                  <label for="number39" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    9
                  </label>
                </li><li>
                  <input type="radio" id="number38" name="hosting" value="number38" class="hidden peer" required />
                  <label for="number38" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    8
                  </label>
                </li><li>
                  <input type="radio" id="number37" name="hosting" value="number37" class="hidden peer" required />
                  <label for="number37" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    7
                  </label>
                </li><li>
                  <input type="radio" id="number36" name="hosting" value="number36" class="hidden peer" required />
                  <label for="number36" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    6
                  </label>
                </li><li>
                  <input type="radio" id="number35" name="hosting" value="number35" class="hidden peer" required />
                  <label for="number35" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    5
                  </label>
                </li><li>
                  <input type="radio" id="number34" name="hosting" value="number34" class="hidden peer" required />
                  <label for="number34" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    4
                  </label>
                </li><li>
                  <input type="radio" id="number33" name="hosting" value="number33" class="hidden peer" required />
                  <label for="number33" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    3
                  </label>
                </li>



              </ul>
            </div>

          </div><div className='md:flex md:justify-around my-10'>
            <div className='md:w-1/2'>
              <h2 class="bg-gray-50 border border-gray-500 text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">Introduction/ Background/ literature
                (clear)</h2>
            </div>
            <div>
              <ul class="flex justify-between mt-5 md:mt-0">
                <li>
                  <input type="radio" id="number50" name="hosting" value="number50" class="hidden peer" required />
                  <label for="number50" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    10
                  </label>
                </li>
                <li>
                  <input type="radio" id="number49" name="hosting" value="number49" class="hidden peer" required />
                  <label for="number49" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    9
                  </label>
                </li><li>
                  <input type="radio" id="number48" name="hosting" value="number48" class="hidden peer" required />
                  <label for="number48" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    8
                  </label>
                </li><li>
                  <input type="radio" id="number47" name="hosting" value="number47" class="hidden peer" required />
                  <label for="number47" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    7
                  </label>
                </li><li>
                  <input type="radio" id="number46" name="hosting" value="number46" class="hidden peer" required />
                  <label for="number46" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    6
                  </label>
                </li><li>
                  <input type="radio" id="number45" name="hosting" value="number45" class="hidden peer" required />
                  <label for="number45" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    5
                  </label>
                </li><li>
                  <input type="radio" id="number44" name="hosting" value="number44" class="hidden peer" required />
                  <label for="number44" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    4
                  </label>
                </li><li>
                  <input type="radio" id="number43" name="hosting" value="number43" class="hidden peer" required />
                  <label for="number43" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    3
                  </label>
                </li>



              </ul>
            </div>

          </div><div className='md:flex md:justify-around my-10'>
            <div className='md:w-1/2'>
              <h2 class="bg-gray-50 border border-gray-500 text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">Introduction/ Background/ literature
                (clear)</h2>
            </div>
            <div>
              <ul class="flex justify-between mt-5 md:mt-0">
                <li>
                  <input type="radio" id="number60" name="hosting" value="number60" class="hidden peer" required />
                  <label for="number60" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    10
                  </label>
                </li>
                <li>
                  <input type="radio" id="number59" name="hosting" value="number59" class="hidden peer" required />
                  <label for="number59" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    9
                  </label>
                </li><li>
                  <input type="radio" id="number58" name="hosting" value="number58" class="hidden peer" required />
                  <label for="number58" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    8
                  </label>
                </li><li>
                  <input type="radio" id="number57" name="hosting" value="number57" class="hidden peer" required />
                  <label for="number57" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    7
                  </label>
                </li><li>
                  <input type="radio" id="number56" name="hosting" value="number56" class="hidden peer" required />
                  <label for="number56" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    6
                  </label>
                </li><li>
                  <input type="radio" id="number55" name="hosting" value="number55" class="hidden peer" required />
                  <label for="number55" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    5
                  </label>
                </li><li>
                  <input type="radio" id="number54" name="hosting" value="number54" class="hidden peer" required />
                  <label for="number54" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    4
                  </label>
                </li><li>
                  <input type="radio" id="number53" name="hosting" value="number53" class="hidden peer" required />
                  <label for="number53" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    3
                  </label>
                </li>



              </ul>
            </div>

          </div>

        </form>
      </div>

    </div>
  )
}
