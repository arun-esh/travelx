const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    slug: String,
    summary: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    neighborhood_overview: {
      type: String,
      trim: true,
      required: true,
    },
    notes: {
      type: String,
      trim: true,
      required: true,
    },
    transit: {
      type: String,
      trim: true,
      required: true,
    },
    property_type: {
      type: String,
      trim: true,
      required: true,
    },
    room_type: {
      type: String,
      trim: true,
      required: true,
    },
    bed_type: {
      type: String,
      trim: true,
      required: true,
    },
    cancellation_policy: {
      type: String,
      trim: true,
      required: true,
    },
    accommodates: {
      type: Number,
      trim: true,
      required: true,
    },
    bedrooms: {
      type: Number,
      trim: true,
      required: true,
    },
    beds: {
      type: Number,
      trim: true,
      required: true,
    },
    number_of_reviews: {
      type: String,
      trim: true,
      required: true,
    },
    bathrooms: {
      type: mongoose.Types.Decimal128,
      trim: true,
      required: true,
    },
    amenities: {
      type: Array,
      default: [],
      required: true,
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    cleaning_fee: {
      type: mongoose.Types.Decimal128,
    },
    images: {
      picture_url: {
        type: String,
        required: true,
      },
    },

    // review_score: {
    //   review_scores_value: {
    //     type: String,
    //     required: true,
    //   },
    //   review_scores_rating: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // reviews: {
    //   type: Array,
    //   friends: [{type: ObjectId}],
    //   required: true,

    // },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// productSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
productSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true, trim: true });
  next();
});

productSchema.pre('save', function (next) {
  // short the name to max length 16 characters
  if (this.name.length > 16) {
    this.name = this.name.substring(0, 16);
  }
  next();
});


// productSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// productSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// productSchema.pre('find', function(next) {
// productSchema.pre(/^find/, function(next) {
//   this.find({ secretproduct: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// productSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// // AGGREGATION MIDDLEWARE
// productSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretproduct: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Product = mongoose.model('product', productSchema);

module.exports = Product;
