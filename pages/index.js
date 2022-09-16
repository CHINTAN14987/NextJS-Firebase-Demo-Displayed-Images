import { useState } from "react";
import Link from "next/link";
import { router, useRouter } from "next/router";

function HomePage(props) {
  const [itemId, setItemId] = useState("");
  const router = useRouter();
  if (!props?.loadedData) {
    return <p>...Loading</p>;
  }
  return (
    <div className="main_container">
      {console.log(props?.loadedData)}
      {props?.loadedData?.map((item) => {
        return (
          <Link href={`/${item.id}`} key={item.id}>
            <div className="main_wrapper">
              {console.log(router.query)}
              <div className="image_container">
                <img src={item.image} alt={item.name} />
              </div>
              <h3
                className={`area ${
                  itemId === item.id ? "hoverText" : "notHoverText"
                }`}
                onMouseOver={() => {
                  setItemId(item.id);
                }}
                onMouseOut={() => {
                  setItemId("");
                }}
              >
                {item.name}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export async function getStaticProps(props) {
  const response = await fetch(
    "https://next-js-demo-16257-default-rtdb.firebaseio.com/collage.json"
  );
  const data = await response.json();
  let transformedData = [];
  for (let key in data) {
    transformedData.push({
      id: key,
      image: data[key].image,
      name: data[key].name,
    });
  }

  return {
    props: { loadedData: transformedData },
  };
}
export default HomePage;
