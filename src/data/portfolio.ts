import bg_image from "../img/bg.jpg";
import iot_image from "../img/iot.png";
interface Data {
  title: string;
  desc: string;
  bg_image: String;
}

const data: Data[] = [
  {
    title: "Algorithms",
    desc: "tdesc",
    bg_image: bg_image,
  },
  // {
  //   title: "Projects",
  //   desc: "tdesc",
  //   bg_image: bg_image,
  // },
  // {
  //   title: "IOT",
  //   desc: "tdesc",
  //   bg_image: iot_image,
  // },
];

export default data;
