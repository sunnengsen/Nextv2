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
          <div className='md:flex md:justify-around '>
            <div className='md:w-1/2'>
              <h2 class="bg-gray-50 border border-gray-500 text-gray-900 text-lg rounded-lg peer-checked:ring-blue-500 peer-checked:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">Introduction/ Background/ literature
(clear)</h2>
            </div>
            <div>
              <ul class="flex justify-between mt-5 md:mt-0">
                <li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                  <label for="hosting-small" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    10
                  </label>
                </li>
                <li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                  <label for="hosting-small" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    9
                  </label>
                </li><li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                  <label for="hosting-small" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    8
                  </label>
                </li><li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                  <label for="hosting-small" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    7
                  </label>
                </li><li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                  <label for="hosting-small" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    6
                  </label>
                </li><li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                  <label for="hosting-small" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    5
                  </label>
                </li><li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                  <label for="hosting-small" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    4
                  </label>
                </li><li>
                  <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                  <label for="hosting-small" class="inline-flex items-center justify-center w-full p-3 sm:p-4 md:p-3 md:mr-1 md:ml-1 text-gray-900 bg-white peer-checked:bg-[#014164] peer-checked:text-white border border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-white hover:bg-[#014164] dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
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
