export default function form2({ isOpen, onClose }) {
  return (
    <div>
      <div className={`fixed  inset-3 items-center justify-center shadow-md top-40  md:p-20  ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-[#e07373] w-full rounded shadow-md ">
          <h2 className="text-xl mb-4 uppercase text-center">Evaluation Form</h2>
          <div className="">
            <div>

              <label htmlFor="" className="text-gray-600">Project Code:</label>
              <input type="text" id="projectcode" autocomplete="username" class="block rounded-lg flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-black" placeholder="Project Code" />
            </div>
            <div>

              <label htmlFor="" className="text-gray-600">Project Code:</label>
              <input type="text" id="projectcode" autocomplete="username" class="block rounded-lg flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-black" placeholder="Project Code" />
            </div>

          </div>
          <form>










            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={onClose}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
