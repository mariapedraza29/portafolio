import '../../index.css'
export const Product = () => {
  return (
    <div className='w-96 h-80 bg-slate-800 mt-8 rounded-2x1
    rounded-b-2xl flex-col flex items-center flex-justify-center rounded-t-2xl'>
        <img className='w-full h-30 bg-slate-500 h-2-1  rounded-2x1 rounded-t-2x1 obj' src="https://elcomercio.pe/resizer/NuaXOA-y7G8MH5MZGAPnMhgB_CU=/560x315/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NFZ7N7B7YVEINGAJOXK3TLNFH4.jpg" alt="imgProduct" />
        <h2 className="text-lime-300 ">Category</h2>
        <div>
            <p className="">Title</p>
            <p>$price</p>
        </div>
    </div>
  )
}
