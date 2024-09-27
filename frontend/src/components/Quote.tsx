const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center ">
        <div className="flex justify-center">
            <div className="max-w-lg">
                <div className=" text-3xl font-bold">
                    "The customer service I recieved was exceptional. The support teram went above and beyond to address my concerns."
                </div>
                <div className="max-w-md text-xl font-semibold mt-4">
                    Jane Doe
                </div>
                <div className="max-w-md text-sm text-slate-400 font-medium">
                    CEO | Acme corp
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quote
