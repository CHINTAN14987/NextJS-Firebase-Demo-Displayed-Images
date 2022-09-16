import React from "react";

const DisplayedImage = (props) => {
  return (
    <>
      <div className="dynamic_wrapper">
        <div className="dynamic_image_wrapper">
          <img src={props.newData.image} alt={props.newData.name} />
        </div>
        <h3>{props.newData.name}</h3>
      </div>
    </>
  );
};

const APICall = async () => {
  const response = await fetch(
    "https://next-js-demo-16257-default-rtdb.firebaseio.com/collage.json"
  );
  const data = await response.json();
  let viewData = [];
  for (let key in data) {
    viewData.push({ id: key, image: data[key].image, name: data[key].name });
  }

  return viewData;
};
export async function getStaticPaths() {
  const data = await APICall();
  const paramKey = data.map(({ id }) => ({ params: { imageId: id } }));
  return {
    paths: paramKey,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const ProductID = context.params.imageId;
  const data = await APICall();
  const product = data.find((item) => item.id === ProductID);
  return {
    props: { newData: product },
  };
}
export default DisplayedImage;
