import React, { useContext } from "react";
import ToggleSwitch from "../Components/ToggleSwitch";

const Home = () => {
  return (
    <>
      <ToggleSwitch />
      <h1>Blog</h1>
      <div className="post">
        <img src="https://picsum.photos/600/300" alt="" />
        <div className="content">
          <h2>Mauris non aliquam nisi</h2>
          <p>
            Pellentesque augue dolor, interdum eget congue ac, accumsan non
            sapien. Ut volutpat a tortor vel mollis. Donec tellus sapien, varius
            iaculis vestibulum a, vehicula eu tortor. Sed cursus venenatis
            facilisis. Aliquam sit amet mauris vulputate, bibendum mi at,
            elementum urna. Ut gravida nisl est, nec fringilla velit tempor nec.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi eget sapien in mauris ullamcorper
            convallis. Aliquam bibendum consectetur diam sit amet sodales.
            Quisque pretium lectus et augue molestie, vel placerat erat
            tristique. Morbi vestibulum, neque eget consequat sodales, ipsum leo
            tincidunt eros, ac mattis ante libero sollicitudin dui. Aenean
            bibendum sit amet odio accumsan molestie. Aenean at erat eu augue
            facilisis sollicitudin. Maecenas eu lorem elementum, sodales velit
            eget, volutpat ante. Praesent eget auctor sapien, sit amet vulputate
            dolor.
          </p>
          <p>
            Phasellus pharetra imperdiet nulla. Morbi et tortor egestas,
            consectetur mauris ac, tempus nunc. Nunc eu eleifend ligula, ac
            efficitur mauris. Nam elit quam, ornare ut lobortis ut, ultrices non
            arcu. Donec eget varius orci, a finibus orci. In at leo vitae arcu
            lacinia sagittis. Nulla urna orci, elementum nec malesuada vel,
            fringilla id magna. Nullam vehicula leo a aliquet egestas. Morbi
            tempor, ex id pellentesque facilisis, sem est pharetra sapien, in
            vestibulum augue nisl et ipsum. Cras in tempus neque, tempus feugiat
            arcu. Donec vulputate, urna vel vestibulum bibendum, turpis elit
            congue justo, a congue justo metus nec orci. Fusce elit felis,
            lacinia eget efficitur ac, feugiat eget sem. Suspendisse eleifend
            arcu a purus finibus aliquam. Sed quis massa enim. Duis semper metus
            eu tristique vehicula. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
