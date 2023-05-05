import axios from "axios";

export async function fetchResultsForTextInput(text: string) {
  // return {
  //   body: {
  //     categories: [
  //       {
  //         id: 1,
  //         name: "Test",
  //         url: "https://skroutz.gr/c/1",
  //         skus: [
  //           {
  //             id: 1,
  //             name: "Sku 1",
  //             url: "https://skroutz.gr/s/1",
  //             image_url: "https://a.scdn.gr/1",
  //             price: 100,
  //             rating: 5,
  //             reviews_count: 10,
  //           },
  //           {
  //             id: 2,
  //             name: "Sku 2",
  //             url: "https://skroutz.gr/s/1",
  //             image_url: "https://a.scdn.gr/1",
  //             price: 100,
  //             rating: 4,
  //             reviews_count: 10,
  //           },
  //           {
  //             id: 1,
  //             name: "Sku 1",
  //             url: "https://skroutz.gr/s/1",
  //             image_url: "https://a.scdn.gr/1",
  //             price: 100,
  //             rating: 3,
  //             reviews_count: 10,
  //           },
  //           {
  //             id: 2,
  //             name: "Sku 2",
  //             url: "https://skroutz.gr/s/1",
  //             image_url: "https://a.scdn.gr/1",
  //             price: 100,
  //             rating: 2,
  //             reviews_count: 10,
  //           },
  //           {
  //             id: 1,
  //             name: "Sku 1",
  //             url: "https://skroutz.gr/s/1",
  //             image_url: "https://a.scdn.gr/1",
  //             price: 100,
  //             rating: 1,
  //             reviews_count: 10,
  //           },
  //           {
  //             id: 2,
  //             name: "Sku 2",
  //             url: "https://skroutz.gr/s/1",
  //             image_url: "https://a.scdn.gr/1",
  //             price: 100,
  //             rating: 5,
  //             reviews_count: 10,
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         name: "Tes2",
  //         url: "https://skroutz.gr/c/1",
  //         skus: [
  //           {
  //             id: 3,
  //             name: "Sku 3",
  //             url: "https://skroutz.gr/s/1",
  //             image_url: "https://a.scdn.gr/1",
  //             price: 100,
  //             rating: 5,
  //             reviews_count: 10,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // };
  let results = await axios
    .get(
      `https://f46a-2a03-e40-2a-200-650f-f17c-bc3f-b657.eu.ngrok.io?q=${text}`
    )
    .catch((e) => {
      console.log("ERROR ON API CALL", e.response?.data);
    });

  return results ? results.data : null;
}
