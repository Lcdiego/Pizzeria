import { FaCartShopping, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Seleccion_Pizza = ({ productoSeleccionado, agregarAlCarrito }) => {
  return (
    <div className="home h-[88vh]">
       <Link className='m-auto' to={'/'}>
          <div className="w-12 px-12 py-12">
            <IoIosArrowBack className='sm:text-4xl' />
          </div>
        </Link>
      <div key={productoSeleccionado.id} className="flex flex-col ">
       
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-10 max-w-xs md:max-w-3xl mx-auto bg-amber-300">
          <div className="w-full md:w-1/3 bg-amber300 grid place-items-center">
            <img
              src={productoSeleccionado.img}
              alt="napo espacial"
              className="transform scale-150 -ml-60"
            />
          </div>
          <div className="w-full md:w-2/3 bg-amber-300 flex flex-col justify-between space-y-2 p-3 gap-6">
            <div className="flex flex-row justify-between items-center">
              <p className="text-black text-3xl font-courgette hidden md:block">
                {productoSeleccionado.name}
              </p>
              <div className="flex items-center space-x-6">
                <button>
                  <FaCirclePlus className="h-10 w-8 text-black" />
                </button>
                <p className="text-3xl text-black">1</p>
                <button>
                  <FaCircleMinus className="h-10 w-8 text-black" />
                </button>
              </div>
              <div className="hidden md:flex items-center px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                <Link to={'/tu_pedido'}>
                  <FaCartShopping className="text-red-500 text-5xl" />
                </Link>
              </div>
            </div>
            <h3 className="font-arial text-black md:text-2xl text-xl">
              {productoSeleccionado.ingredients.join(', ')}
            </h3>
            <div className="flex flex-row gap-4">
              <div>
                <img src={productoSeleccionado.imgIngredients} className=" h-28" />
              </div>

            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-2xl font-courgette text-black">
                Precio total:
                <span className="text-2xl font-normal text-red-500">
                  {" "}
                  {productoSeleccionado.price}
                </span>
              </p>
              <Link to={'/tu_pedido'}>
                <button onClick={() => agregarAlCarrito(productoSeleccionado)} className="bg-red-500  px-8 py-2 rounded-lg text-white text-xl font-arial">
                  Agregar
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Seleccion_Pizza