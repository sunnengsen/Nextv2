export default function page() {
  return (
    <div>
      <div className={`sticky bg-gray-800  inset-3 items-center justify-center top-20  md:p-20  `}>
        <div className="bg-[#ffffff] w-full rounded-lg shadow-2xl border-2   ">
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
                  <h4>Superior(10-9)</h4>
                  <h4>Excellent(8-7)</h4>
                  <h4>Good(6-5)</h4>
                  <h4>Needs improvement(4-3)</h4>
                </div>

              </div>
              <div className="mr-20 ml-20">
                <div className="flex justify-around p-5">
                  <h3>Technical Quality</h3>
                  <h3>70%</h3>
                </div>
                <div className="flex justify-between text-center">
                  <input className="border-2 w-1/2 h-20 border-gray-500 rounded-lg focus:right-4 text-center" placeholder="Decription" type="text" />
                  <select className="bg-[#014164] rounded-2xl pr-6 pl-6 pt-5 pb-5">
                    <option value="1" className="text-center mr-10">1</option>
                    <option value="2" className="text-center mr-10">2</option>
                    <option value="3" className="text-center mr-10">3</option>
                    <option value="4" className="text-center">4</option>
                    <option value="5" className="text-center">5</option>
                    <option value="6" className="text-center">6</option>
                    <option value="7" className="text-center">7</option>
                    <option value="8" className="text-center">8</option>
                    <option value="9" className="text-center">9</option>
                    <option value="10" className="text-center">10</option>

                  </select>
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
