const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    // slug: String,
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
      required: true,
    },
    transit: {
      type: String,
      trim: true,
      required: true,
    },
    // access: {
    //   type: String,
    //   trim: true,
    //   required: true,
    // },
    house_rules: {
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
      // check if number of reviews are greater than 0
      // validate: {
      //   validator: function(v) {
      //     return v > 0;
      //   }
      // },
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
      required: true,
    },
    security_deposit: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    images: {
      picture_url: {
        type: String,
        required: true,
      },
    },

    address: {
      location: {
        coordinates: {
          type: [Number],
        },
      },
      street: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },

    // // HOST INFORMATION
    host: {
      host_id: {
        type: String,
        required: true,
      },
      host_name: {
        type: String,
        required: true,
      },
      host_about: {
        type: String,
        required: true,
      },
      host_location: {
        type: String,
        required: true,
      },
      host_response_rate: {
        type: Number,
        required: true,
      },

      host_listings_count: {
        type: String,
        required: true,
      },
      host_total_listings_count: {
        type: String,
        required: true,
      },
      host_verifications: {
        type: Array,
        default: [],
        required: true,
      },
    },

    // // RevIEWS INFORMATION

    review_scores: {
      type: Object,
      review_scores_accuracy: {
        type: Number,
        trim: true,
        required: true,
      },
      review_scores_cleanliness: {
        type: Number,
        required: true,
      },
      review_scores_checkin: {
        type: Number,
        required: true,
      },
      review_scores_communication: {
        type: Number,
        required: true,
      },
      review_scores_location: {
        type: Number,
        required: true,
      },
      review_scores_value: {
        type: Number,
        required: true,
      },
      review_scores_rating: {
        type: Number,
        required: true,
      },
    },

    reviews: [
      {
        reviewer_name: {
          type: String,
          required: true,
        },
        comments: {
          type: String,
          required: true,
        },
      },
    ],
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// productSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });

// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// productSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true, trim: true });
//   next();
// });

// productSchema.pre('save', function (next) {
//   // short the name to max length 16 characters
//   if (this.name.length > 16) {
//     this.name = this.name.substring(0, 16);
//   }
//   next();
// });

// show only few random documents
// productSchema.pre(/^find/, function (next) {
//   this.find({ active: { $ne: false } });
//   this.limit(16);
//   this.skip(Math.floor(Math.random() * 6));
//   next();
// });



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
