const {
  Component,
  PropTypes
} = require("@budibase/types");

module.exports = {
  name: "Cloudinary Responsive Image",
  description: "A responsive image component using Cloudinary's fetch transformation.",
  icon: "Image",
  type: Component.TYPE,
  props: {
    imageUrl: {
      type: PropTypes.STRING,
      required: true,
      description: "Full Budibase-hosted image URL from an attachment column.",
    },
    aspectRatio: {
      type: PropTypes.STRING,
      required: true,
      defaultValue: "1:1",
      description: "Desired crop ratio (e.g., '1:1', '16:9').",
    },
    maxWidth: {
      type: PropTypes.NUMBER,
      required: true,
      defaultValue: 300,
      description: "Maximum width of the image element (in pixels).",
    },
  },
};