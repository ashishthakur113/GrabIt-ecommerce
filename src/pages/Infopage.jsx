import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, Link , useNavigate } from "react-router-dom";
import {  Truck,  ShieldCheck, HandCoins, LockKeyhole, Undo2, Heart, } from "lucide-react";
import { AddtoWish, RemoveFromWish } from "../redux/wishListSlice";
import  RelatedProducts from "../Components/RelatedProducts"; 
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import Star from "../Components/Star";

export default function Infopage() {

  const { id, category } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const passedCategory = location.state?.category || category;
  const wishlist = useSelector((state) => state.wishlist);
  const isWished = wishlist.some((item) => item.id === productInfo?.id);

  const cssofprod = "font-semibold text-[12px] sm:text-[15px] text-gray-800";
  const cssofprod2 = "sm:w-60 w-40 text-[12px] sm:text-[15px] font-bold";
  
  const iconcss = "text-cyan-700 w-5 h-5 sm:w-[30px] sm:h-[30px]";
  const btncss = "w-full h-12 rounded-md cursor-pointer font-semibold border-black border-2 mb-5";

  const dispatch = useDispatch();
  const navigate = useNavigate();

 useEffect(() => {
  window.scrollTo(0, 0);

async function fetchProductAndRelated() {
  try {
    const res = await fetch("/data.json"); 
    const json = await res.json();
    const allProducts = json.products;

    const selectedProduct = allProducts.find(p => String(p.id) === String(id));
    setProductInfo(selectedProduct);
    setPrice(selectedProduct?.price || 0);

    const related = allProducts.filter(p => 
      p.category === category && String(p.id) !== String(id)
    );
    setRelatedProducts(related);
  } catch (error) {
    console.error("Error loading data.json", error);
  }
}

  fetchProductAndRelated();
}, [id, category]);


  useEffect(() => {
    if (productInfo?.price) {
      setPrice(productInfo.price * quantity);
    }
  }, [quantity, productInfo]);

  const handleCart = () => {
    const product = {
      id: productInfo.id,
      image: productInfo.images,
      title: productInfo.title,
      price: productInfo.price * quantity,
      quantity,
      category: productInfo.category,
    };
    toast.success("Item Added to Cart" , {autoClose:1000});
    dispatch(AddItem(product));
  };

  const handlewishlist = () => {
    if (isWished) {
      dispatch(RemoveFromWish(productInfo.id));
    } else {
      const product = {
        id: productInfo.id,
        image: productInfo.images,
        title: productInfo.title,
        price: productInfo.price,
        category: productInfo.category,
        description: productInfo.description,
      };
      toast.success("Add to wishlist" , {autoClose:1000});
      
      dispatch(AddtoWish(product));
    }
  };

  const handleBuyBtn = () =>{
    const product = {
      id: productInfo.id,
      image : productInfo.images,
      title : productInfo.title,
      price: productInfo.price * quantity ,
      quantity,
      category : productInfo.category ,

    };
    navigate("/purchase" ,{ state: { from:"infopage" , products:[product] ,}, });
  };

  if (!productInfo) return <p>Loading...</p>;

  return (
    <div className="mb-20">
      <nav className="text-sm text-gray-600 ml-2 mt-8 mb-6">
        <ul className="flex space-x-2">
          <li>
            <Link to="/category" className="text-blue-600 hover:underline">   Category </Link>
          </li>
          {passedCategory && (
            <>
              <li>/</li>
              <li> <Link   to={`/category/${passedCategory}`} className="text-blue-600 hover:underline capitalize"  >
                  {passedCategory}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
   
      <div className="flex flex-col sm:flex-row sm:my-10">
       <div className="relative w-fit mx-10">
          <img
            src={productInfo.images}
            alt={productInfo.title}
            className="w-80 h-100 mt-8 sm:h-120 sm:w-100 sm:mx-10"
          />
          <div className="absolute top-10 left-1 group cursor-pointer">
            <Heart className="w-6 h-6"
              style={{ fill: isWished ? "red" : "white", stroke: isWished ? "red" : "black",  strokeWidth: 2,}}
              onClick={handlewishlist}
            />
            <span className="absolute left-8 top-1 bg-black text-white text-[11px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {isWished ? "Remove from wishlist" : "Add to wishlist"}
            </span>
          </div>
        </div>

       
      <div className="flex flex-col px-4 sm:px-8 md:w-[55%] lg:w-[60%] xl:w-[65%]">

          <h1 className="text-[20px] underline sm:no-underline sm:text-3xl pt-4">
            {productInfo.title}
          </h1>
          <h2 className="text-1xl sm:text-2xl pt-2 sm:pt-4 text-slate-500">
            {productInfo.description}
          </h2>
          <h3 className="sm:text-xl text1xl uppercase pt-2 sm:pt-4 text-zinc-800">
            <span className="font-bold">Category:</span> {productInfo.category}
          </h3>

          <div className="flex items-center mt-2 sm:mt-3 gap-2">
            <Star stars={productInfo.rating} />
          </div>

          <div className="text-2xl pt-1 sm:pt-2 text-black">
            <div className="flex items-center gap-4">
              <span className="text-red-600">
                -{Math.floor(productInfo.discountPercentage)}%
              </span>
              <span className="text-black">${Math.floor(price)}</span>
            </div>
            <p className="text-sm text-gray-600">
              Inclusive of all taxes
            </p>
            <p className="text-lg text-green-800">
              {productInfo.availabilityStatus}
            </p>
          </div>

          <hr className="my-3 w-full" />

          <h4 className="text-[17px] font-bold sm:hidden">Shop with Confidence</h4>
          <div className="flex flex-wrap mt-3 justify-between sm:justify-center sm:gap-6">
            {[
              { icon: <Truck className={iconcss} />, text: "Free Delivery" },
              {
                icon: <ShieldCheck className={iconcss} />,
                text: productInfo.warrantyInformation,
              },
              {
                icon: <Undo2 className={iconcss} />,
                text: productInfo.returnPolicy,
              },
              {
                icon: <HandCoins className={iconcss} />,
                text: "Cash/Pay on Delivery",
              },
              {
                icon: <LockKeyhole className={iconcss} />,
                text: "Secure Transaction",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="w-1/2 flex items-center gap-2 mb-4 sm:w-auto sm:flex-col sm:items-center sm:text-center"
              >
                <div className="sm:w-14 sm:h-14 sm:rounded-full sm:bg-gray-100 sm:shadow-md sm:flex sm:items-center sm:justify-center">
                  {item.icon}
                </div>
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

        
          <div className="mt-2">
            <label className="text-2xl text-black">Quantity</label>

            <input  type="number"  min="1"max="30"  value={quantity} 
               onChange={(e) => {  const value = Number(e.target.value);  if (value >= 1 && value <= 30) {   setQuantity(value); }}}
              className={`${btncss} text-black pl-3`} />
             
             <button className={`${btncss} bg-blue-500 hover:bg-blue-600 text-white`} onClick={handleBuyBtn}> Buy Now </button>
             <button className={`${btncss} bg-blue-400 hover:bg-blue-600 text-white`}onClick={handleCart}> Add To Cart  </button>
          </div>

          <hr className="mt-3" />
          <div className="grid gap-2 mt-2 capitalize">
            <div className="flex">
              <span className={cssofprod2}>Brand</span>
              <span className={cssofprod}>{productInfo.brand}</span>
            </div>
            <div className="flex">
              <span className={cssofprod2}>Warranty Information</span>
              <span className={cssofprod}>{productInfo.warrantyInformation}</span>
            </div>
            <div className="flex">
              <span className={cssofprod2}>Shipping Time</span>
              <span className={cssofprod}>{productInfo.shippingInformation}</span>
            </div>
            <div className="flex">
              <span className={cssofprod2}>Return Policy</span>
              <span className={cssofprod}>{productInfo.returnPolicy}</span>
            </div>
          </div>
        </div>
      </div>

 
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </div>
  );
}
