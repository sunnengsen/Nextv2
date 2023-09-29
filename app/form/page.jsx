export default function page() {
  return (
    <div >
      <div className={`sticky bg-gray-800  inset-3 items-center justify-center top-20  md:p-20 mb-20  `}>
        <div className="bg-[#ffffff] w-full rounded-lg shadow-2xl border-2 mb-20  ">
          <h2 className="text-3xl mb-4 uppercase text-center font-bold ">Evaluation Form</h2>
          <form>
            <div className="flex justify-end">
              <div className="md:mr-20">
                <div className="p-2">
                  <label htmlFor="departmentName" className="text-gray-600">Department name</label>
                  <input type="text" id="departmentName" value="" class=" block rounded-lg border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-4 sm:text-sm sm:leading-6 border-gray-500" placeholder="Department name" />
                </div>
                <div className="p-2">
                  <label htmlFor="" className="text-gray-600">Generation</label>
                  <input type="text" id="projectname" value="" class="block rounded-lg flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-4 sm:text-sm sm:leading-6 border-gray-500" placeholder="Generation" />
                </div>
                <div className="p-2 grid ">
                  <label htmlFor="" className="text-gray-600">Year</label>
                  <select name="type" id="type" className="focus:ring-4 pl-2 border-2 h-10 rounded-lg border-gray-500 text-center">
                    <option value="" >Select Type</option>
                    <option value="volvo" className=" bg-[#014164] text-center">1</option>
                    <option value="saab" className=" bg-[#014164] text-center">2</option>
                    <option value="saab" className=" bg-[#014164] text-center">3</option>
                    <option value="saab" className=" bg-[#014164] text-center">4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className=" mt-10 w-full">
              <h1 className="uppercase text-center p-5 m-5 text-xl font-bold">Judging Criteria</h1>
              <div className="border-2 border-gray-500 rounded-lg text-center mr-20 ml-20">
                <h2 className="uppercase p-5 ">Evaluation</h2>
                <div className="flex text-center justify-around">
                  <h4>Superior</h4>
                  <h4>Excellent</h4>
                  <h4>Good</h4>
                  <h4>Needs improvement</h4>
                </div>
              </div>
              <div className="mr-20 ml-20">
                <div className="flex justify-around p-5">
                  <h3>Technical Quality</h3>
                  <h3>70%</h3>
                </div>
                <div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div>
                <div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div><div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div><div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div><div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div><div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div>
                
                


              </div>
              <div className="mr-20 ml-20">
                <div className="flex justify-around p-5">
                  <h3>Technical Quality</h3>
                  <h3>70%</h3>
                </div>
                <div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div>
                <div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div>
                <div className="flex justify-between mt-10 mb">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div>
                
                
                


              </div>
              <div className="mr-20 ml-20">
                <div className="flex justify-around p-5">
                  <h3>Technical Quality</h3>
                  <h3>70%</h3>
                </div>
                <div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small1" name="hosting" value="hosting-small1" class="hidden peer" required />
                        <label for="hosting-small1" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small2" name="hosting" value="hosting-small2" class="hidden peer" required />
                        <label for="hosting-small2" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small3" name="hosting" value="hosting-small3" class="hidden peer" required />
                        <label for="hosting-small3" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small4" name="hosting" value="hosting-small4" class="hidden peer" required />
                        <label for="hosting-small4" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small5" name="hosting" value="hosting-small5" class="hidden peer" required />
                        <label for="hosting-small5" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small6" name="hosting" value="hosting-small6" class="hidden peer" required />
                        <label for="hosting-small6" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small7" name="hosting" value="hosting-small7" class="hidden peer" required />
                        <label for="hosting-small7" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small8" name="hosting" value="hosting-small8" class="hidden peer" required />
                        <label for="hosting-small8" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div>
                <div className="flex justify-between mt-10">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small9" name="hosting" value="hosting-small9" class="hidden peer" required />
                        <label for="hosting-small9" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small10" name="hosting" value="hosting-small10" class="hidden peer" required />
                        <label for="hosting-small10" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div>
                <div className="flex justify-between mt-10 mb">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-8 text-center " placeholder="Decription" type="text" />
                  <div class="flex rounded-md items-center justify-center">
                    <ul class="flex h-full w-full gap-6 md:grid-cols-2">
                      <li>
                        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="hosting-small" class=" inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          10
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="hosting-small1" name="hosting" value="hosting-small1" class="hidden peer" required />
                        <label for="hosting-small1" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          9
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small2" name="hosting" value="hosting-small2" class="hidden peer" required />
                        <label for="hosting-small2" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          8
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small3" name="hosting" value="hosting-small3" class="hidden peer" required />
                        <label for="hosting-small3" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          7
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small4" name="hosting" value="hosting-small4" class="hidden peer" required />
                        <label for="hosting-small4" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          6
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small5" name="hosting" value="hosting-small5" class="hidden peer" required />
                        <label for="hosting-small5" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          5
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small6" name="hosting" value="hosting-small6" class="hidden peer" required />
                        <label for="hosting-small6" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          4
                        </label>
                      </li> <li>
                        <input type="radio" id="hosting-small7" name="hosting" value="hosting-small7" class="hidden peer" required />
                        <label for="hosting-small7" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-500 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          3
                        </label>
                      </li>

                    </ul>
                  </div>
                  <div>

                  </div>
                </div>
                
                
                


              </div>
            </div>











          </form>
        </div>
      </div>
    </div>
  )
}
