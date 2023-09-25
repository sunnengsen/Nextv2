"use client"
import Form2 from "./form2"
export default function Form() {
  return (
    <div className='bg-[#014164]'>
      <form className="">
        <div>

        <div className="w-full  justify-center p-2 lg:pr-52 lg:pl-52 2xl:pr-96 2xl:pl-96">
          <label htmlFor="name" className=" text-xl text-white text-center flex justify-center">Introduction/ Background/ literature (clear)</label>
          <Form2/>
        </div>
        </div>
      </form>
    </div>
  )
}

