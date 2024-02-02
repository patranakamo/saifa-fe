<template>
  <form>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group mb-4">
          <label class="label">Product Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Product title here"
          />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group mb-4">
          <label class="label">Product Description</label>
          <textarea
            class="form-control"
            placeholder="Write your note..."
            cols="30"
            rows="7"
          ></textarea>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group mb-4">
          <label class="label">Regular Price</label>
          <input type="text" class="form-control" placeholder="Enter price" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group mb-4">
          <label class="label">Sale Price</label>
          <input type="text" class="form-control" placeholder="Enter price" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group mb-4">
          <label class="label">Publish Schedule</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter publish date"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group mb-4">
          <label class="label">Product in Stock</label>
          <input
            type="text"
            class="form-control"
            placeholder="Number in stock"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group mb-4">
          <label class="label">Product ID</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter product id"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group mb-4">
          <label class="label">Discount / Offer</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter offer price"
          />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group mb-4 border p-1 d-inline-block">
          <img
            src="../../../assets/images/products/product-1.jpg"
            alt="product-1"
          />
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group mb-4">
          <label class="label">Display Images</label>
          <div
            class="product image form-control h-100 text-center position-relative py-5 px-5"
          >
            <div class="product-upload">
              <label for="file-upload" class="file-upload mb-0">
                <img src="../../../assets/images/upload.png" alt="upload" />
              </label>
              <input id="file-upload" type="file" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="form-group">
          <button type="submit" class="default-btn">Create Product</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddProduct",
};
</script>