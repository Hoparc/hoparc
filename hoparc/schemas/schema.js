// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import blog from "./blog";
import blogCategory from "./blog.category";
import insurance from "./insurance";
import location from "./location";
import product from "./product";
import service from "./service";
import testimonial from "./testimonial";
import productCategory from "./product.category";
import serviceCategory from "./service.category";
import introduction from "./introduction";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blog,
    blogCategory,
    insurance,
    introduction,
    location,
    product,
    productCategory,
    service,
    serviceCategory,
    testimonial,
  ]),
});
