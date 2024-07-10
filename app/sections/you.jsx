import Image from "next/image"

const you = () => {
  return (
    <div className="bg-[#EDEEF2] p-5 lg:block hidden py-10">
      <div className="">
        <h1 className="font-space-grotesk font-medium lg:text-[64px] text-center"> You in our sneakers</h1>
        <p className=" lg:text-[32px] max-w-[70%] mx-auto mb-5 text-center font-space-grotesk">Snap a photo of yourself in our sneakers and share it with our online community</p>
    <Image src="/img/grid.png" width={900} height={400} alt="" className="mx-auto" />
    </div>
    </div>
  )
}

export default you