
function AddCoffee() {
    const handelAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        console.log(name,quantity,supplier,taste,category,details,photo)
    }
  return (
    <div>
          <h2 className="text-3xl font-bold">Add Coffee</h2>
          <div className="bg-[#F4F3F0] p-24">
              <form onSubmit={handelAddCoffee}>
                  <div className="flex gap-4 mb-5">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Coffee Name</span>
                          </label>
                          <input
                              name="name"
                              type="text"
                              placeholder="Coffee Name"
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Available Quantity</span>
                          </label>
                          <input
                              name="quantity"
                              type="text"
                              placeholder="Available Quantity"
                              className="input input-bordered w-full" required />
                      </div>
                  </div>

                  <div className="flex gap-4 mb-5">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Supplier</span>
                          </label>
                          <input
                              name="supplier"
                              type="text"
                              placeholder="Supplier Name"
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Taste</span>
                          </label>
                          <input
                              name="taste"
                              type="text"
                              placeholder="Taste"
                              className="input input-bordered w-full" required />
                      </div>
                  </div>
                  <div className="flex gap-4 mb-5">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Category</span>
                          </label>
                          <input
                              name="category"
                              type="text"
                              placeholder="Category"
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Details</span>
                          </label>
                          <input
                              name="details"
                              type="text"
                              placeholder="Details"
                              className="input input-bordered w-full" required />
                      </div>
                  </div>
                  <div className="form-control w-full mb-7">
                      <label className="label">
                          <span className="label-text">Photo URL</span>
                      </label>
                      <input
                          name="photo"
                          type="text"
                          placeholder="Photo URL"
                          className="input input-bordered w-full" required />
                  </div>
                  <button type="submit" className="btn btn-warning w-full">
                      Add Coffee
                  </button>
              </form>
          </div>
    </div>
  )
}

export default AddCoffee
