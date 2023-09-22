import React from "react";
import Link from "next/link";

const booksData = [
  {
    id: 1,
    category: "Category 1",
    title: "Nike", // Updated title
    price: "$20.00", // Updated price
    imageUrl:
      "https://m.media-amazon.com/images/I/61bUvFFPUGL._AC_UL600_FMwebp_QL65_.jpg",
    slug: "product-slug-1",
  },
  {
    id: 2,
    category: "Category 2",
    title: "Addidas",
    price: "$21.15",
    imageUrl:
      "https://m.media-amazon.com/images/I/61bUvFFPUGL._AC_UL600_FMwebp_QL65_.jpg",
    slug: "product-slug-2",
  },
  {
    id: 3,
    category: "Category 3",
    title: "PUMA",
    price: "$12.00",
    imageUrl:
      "https://m.media-amazon.com/images/I/61bUvFFPUGL._AC_UL600_FMwebp_QL65_.jpg",
    slug: "product-slug-3",
  },
  {
    id: 4,
    category: "Category 4",
    title: "INDIAN TERRAIN",
    price: "$18.40",
    imageUrl:
      "https://m.media-amazon.com/images/I/61bUvFFPUGL._AC_UL600_FMwebp_QL65_.jpg",
    slug: "product-slug-4",
  },
];

const Tshirt = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {booksData.map((book) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={book.id}>
                <Link
                  href={{
                    pathname: "/product/[slug]",
                    query: {
                      name: book.title, // Pass the t-shirt name as a query parameter
                      image: book.imageUrl, // Pass the image URL as a query parameter
                      price: book.price, // Pass the price as a query parameter
                      slug: book.slug, // Pass the price as a query parameter
                    },
                  }}
                  as={`/product/${book.slug}`}
                >
                  <p className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="w-[130px] h-full block"
                      src={book.imageUrl}
                    />
                  </p>
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {book.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {book.title}
                  </h2>
                  <p className="mt-1">{book.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tshirt;
