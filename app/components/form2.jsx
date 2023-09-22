"use client"
function Form2 (){
    return(
        <div className=''>

          <div className="w-full ">
            <label htmlFor="point" className="block text-white">Point</label>

            <ul class="flex justify-between w-full" id="form2">
              <li className='p-0.5'>
                <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required />
                <label for="hosting-small" class="inline-flex items-center justify-between pt-1 pb-1 pr-1.5 pl-1.5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">10</label>
              </li>
              <li className='p-0.5'>
                <input type="radio" id="hosting-small1" name="hosting" value="hosting-small1" class="hidden peer" required />
                <label for="hosting-small1" class="inline-flex items-center justify-between w-full pt-1 pb-1 pr-2.5 pl-2.5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">9</label>
              </li>
              <li className='p-0.5'>
                <input type="radio" id="hosting-small2" name="hosting" value="hosting-small2" class="hidden peer" required />
                <label for="hosting-small2" class="inline-flex items-center justify-between w-full pt-1 pb-1 pr-2.5 pl-2.5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">8</label>
              </li>
              <li className='p-0.5'>
                <input type="radio" id="hosting-small3" name="hosting" value="hosting-small3" class="hidden peer" required />
                <label for="hosting-small3" class="inline-flex items-center justify-between w-full pt-1 pb-1 pr-2.5 pl-2.5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">7</label>
              </li>
              <li className='p-0.5'>
                <input type="radio" id="hosting-small4" name="hosting" value="hosting-small4" class="hidden peer" required />
                <label for="hosting-small4" class="inline-flex items-center justify-between w-full pt-1 pb-1 pr-2.5 pl-2.5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">6</label>
              </li>
              <li className='p-0.5'>
                <input type="radio" id="hosting-small5" name="hosting" value="hosting-small5" class="hidden peer" required />
                <label for="hosting-small5" class="inline-flex items-center justify-between w-full pt-1 pb-1 pr-2.5 pl-2.5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">5</label>
              </li>
              <li className='p-0.5'>
                <input type="radio" id="hosting-small6" name="hosting" value="hosting-small6" class="hidden peer" required />
                <label for="hosting-small6" class="inline-flex items-center justify-between w-full pt-1 pb-1 pr-2.5 pl-2.5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">4</label>
              </li>
              <li className='p-0.5'>
                <input type="radio" id="hosting-small7" name="hosting" value="hosting-small7" class="hidden peer" required />
                <label for="hosting-small7" class="inline-flex items-center justify-between w-full pt-1 pb-1 pr-2.5 pl-2.5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">3</label>
              </li>
            </ul>
          </div>
          <div className="w-full p-2">
            <label htmlFor="message" className="block text-white">Comment:</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border rounded-md"
              placeholder="Enter your comment"
            ></textarea>
          </div>
          </div>
    );
}
export default Form2;