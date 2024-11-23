import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const category = data.category;
    const image = data.image;
    const description = data.description;
    const sellerEmail = user.email;
    console.log(data);

    const product = {
      title,
      brand,
      price,
      stock,
      category,
      image,
      description,
      sellerEmail,
    };

    const token = localStorage.getItem("access-token");

    axios
      .post("https://quick-ponno-server.vercel.app/addProduct", product, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Add Successfully ✔",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-12">Add Product</h1>

      <div>
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          {/* Title & Brand */}
          <div className="flex gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Product Title"
                className=" w-full p-2 border border-black rounded-md"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500">Title is required</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="Brand"
                className=" w-full p-2 border border-black rounded-md"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <p className="text-red-500">Brand is required</p>
              )}
            </div>
          </div>
          {/* 2nd row price stock & category */}
          <div className="flex gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Product Price"
                className=" w-full p-2 border border-black rounded-md"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500">Price is required</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder="Stock"
                className=" w-full p-2 border border-black rounded-md"
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <p className="text-red-500">Stock is required</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                className=" w-full p-2 border border-black rounded-md"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <p className="text-red-500">Category is required</p>
              )}
            </div>
          </div>
          {/* Image */}
          <div className="flex gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Product Image URL"
                className=" w-full p-2 border border-black rounded-md"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-red-500">Product Image URL is required</p>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Product Description"
                className=" w-full p-2 border border-black rounded-md"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="text-red-500">Product Description is required</p>
              )}
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-full">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
