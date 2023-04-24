function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     image/cani/male0001.png
     image/cani/male0002.png
     image/cani/male0003.png
     image/cani/male0004.png
     image/cani/male0005.png
     image/cani/male0006.png
     image/cani/male0007.png
     image/cani/male0008.png
     image/cani/male0009.png
     image/cani/male0010.png
     image/cani/male0011.png
     image/cani/male0012.png
     image/cani/male0013.png
     image/cani/male0014.png
     image/cani/male0015.png
     image/cani/male0016.png
     image/cani/male0017.png
     image/cani/male0018.png
     image/cani/male0019.png
     image/cani/male0020.png
     image/cani/male0021.png
     image/cani/male0022.png
     image/cani/male0023.png
     image/cani/male0024.png
     image/cani/male0025.png
     image/cani/male0026.png
     image/cani/male0027.png
     image/cani/male0028.png
     image/cani/male0029.png
     image/cani/male0030.png
     image/cani/male0031.png
     image/cani/male0032.png
     image/cani/male0033.png
     image/cani/male0034.png
     image/cani/male0035.png
     image/cani/male0036.png
     image/cani/male0037.png
     image/cani/male0038.png
     image/cani/male0039.png
     image/cani/male0040.png
     image/cani/male0041.png
     image/cani/male0042.png
     image/cani/male0043.png
     image/cani/male0044.png
     image/cani/male0045.png
     image/cani/male0046.png
     image/cani/male0047.png
     image/cani/male0048.png
     image/cani/male0049.png
     image/cani/male0050.png
     image/cani/male0051.png
     image/cani/male0052.png
     image/cani/male0053.png
     image/cani/male0054.png
     image/cani/male0055.png
     image/cani/male0056.png
     image/cani/male0057.png
     image/cani/male0058.png
     image/cani/male0059.png
     image/cani/male0060.png
     image/cani/male0061.png
     image/cani/male0062.png
     image/cani/male0063.png
     image/cani/male0064.png
     image/cani/male0065.png
     image/cani/male0066.png
     image/cani/male0067.png
     image/cani/male0068.png
     image/cani/male0069.png
     image/cani/male0070.png
     image/cani/male0071.png
     image/cani/male0072.png
     image/cani/male0073.png
     image/cani/male0074.png
     image/cani/male0075.png
     image/cani/male0076.png
     image/cani/male0077.png
     image/cani/male0078.png
     image/cani/male0079.png
     image/cani/male0080.png
     image/cani/male0081.png
     image/cani/male0082.png
     image/cani/male0083.png
     image/cani/male0084.png
     image/cani/male0085.png
     image/cani/male0086.png
     image/cani/male0087.png
     image/cani/male0088.png
     image/cani/male0089.png
     image/cani/male0090.png
     image/cani/male0091.png
     image/cani/male0092.png
     image/cani/male0093.png
     image/cani/male0094.png
     image/cani/male0095.png
     image/cani/male0096.png
     image/cani/male0097.png
     image/cani/male0098.png
     image/cani/male0099.png
     image/cani/male0100.png
     image/cani/male0101.png
     image/cani/male0102.png
     image/cani/male0103.png
     image/cani/male0104.png
     image/cani/male0105.png
     image/cani/male0106.png
     image/cani/male0107.png
     image/cani/male0108.png
     image/cani/male0109.png
     image/cani/male0110.png
     image/cani/male0111.png
     image/cani/male0112.png
     image/cani/male0113.png
     image/cani/male0114.png
     image/cani/male0115.png
     image/cani/male0116.png
     image/cani/male0117.png
     image/cani/male0118.png
     image/cani/male0119.png
     image/cani/male0120.png
     image/cani/male0121.png
     image/cani/male0122.png
     image/cani/male0123.png
     image/cani/male0124.png
     image/cani/male0125.png
     image/cani/male0126.png
     image/cani/male0127.png
     image/cani/male0128.png
     image/cani/male0129.png
     image/cani/male0130.png
     image/cani/male0131.png
     image/cani/male0132.png
     image/cani/male0133.png
     image/cani/male0134.png
     image/cani/male0135.png
     image/cani/male0136.png
     image/cani/male0137.png
     image/cani/male0138.png
     image/cani/male0139.png
     image/cani/male0140.png
     image/cani/male0141.png
     image/cani/male0142.png
     image/cani/male0143.png
     image/cani/male0144.png
     image/cani/male0145.png
     image/cani/male0146.png
     image/cani/male0147.png
     image/cani/male0148.png
     image/cani/male0149.png
     image/cani/male0150.png
     image/cani/male0151.png
     image/cani/male0152.png
     image/cani/male0153.png
     image/cani/male0154.png
     image/cani/male0155.png
     image/cani/male0156.png
     image/cani/male0157.png
     image/cani/male0158.png
     image/cani/male0159.png
     image/cani/male0160.png
     image/cani/male0161.png
     image/cani/male0162.png
     image/cani/male0163.png
     image/cani/male0164.png
     image/cani/male0165.png
     image/cani/male0166.png
     image/cani/male0167.png
     image/cani/male0168.png
     image/cani/male0169.png
     image/cani/male0170.png
     image/cani/male0171.png
     image/cani/male0172.png
     image/cani/male0173.png
     image/cani/male0174.png
     image/cani/male0175.png
     image/cani/male0176.png
     image/cani/male0177.png
     image/cani/male0178.png
     image/cani/male0179.png
     image/cani/male0180.png
     image/cani/male0181.png
     image/cani/male0182.png
     image/cani/male0183.png
     image/cani/male0184.png
     image/cani/male0185.png
     image/cani/male0186.png
     image/cani/male0187.png
     image/cani/male0188.png
     image/cani/male0189.png
     image/cani/male0190.png
     image/cani/male0191.png
     image/cani/male0192.png
     image/cani/male0193.png
     image/cani/male0194.png
     image/cani/male0195.png
     image/cani/male0196.png
     image/cani/male0197.png
     image/cani/male0198.png
     image/cani/male0199.png
     image/cani/male0200.png
     image/cani/male0201.png
     image/cani/male0202.png
     image/cani/male0203.png
     image/cani/male0204.png
     image/cani/male0205.png
     image/cani/male0206.png
     image/cani/male0207.png
     image/cani/male0208.png
     image/cani/male0209.png
     image/cani/male0210.png
     image/cani/male0211.png
     image/cani/male0212.png
     image/cani/male0213.png
     image/cani/male0214.png
     image/cani/male0215.png
     image/cani/male0216.png
     image/cani/male0217.png
     image/cani/male0218.png
     image/cani/male0219.png
     image/cani/male0220.png
     image/cani/male0221.png
     image/cani/male0222.png
     image/cani/male0223.png
     image/cani/male0224.png
     image/cani/male0225.png
     image/cani/male0226.png
     image/cani/male0227.png
     image/cani/male0228.png
     image/cani/male0229.png
     image/cani/male0230.png
     image/cani/male0231.png
     image/cani/male0232.png
     image/cani/male0233.png
     image/cani/male0234.png
     image/cani/male0235.png
     image/cani/male0236.png
     image/cani/male0237.png
     image/cani/male0238.png
     image/cani/male0239.png
     image/cani/male0240.png
     image/cani/male0241.png
     image/cani/male0242.png
     image/cani/male0243.png
     image/cani/male0244.png
     image/cani/male0245.png
     image/cani/male0246.png
     image/cani/male0247.png
     image/cani/male0248.png
     image/cani/male0249.png
     image/cani/male0250.png
     image/cani/male0251.png
     image/cani/male0252.png
     image/cani/male0253.png
     image/cani/male0254.png
     image/cani/male0255.png
     image/cani/male0256.png
     image/cani/male0257.png
     image/cani/male0258.png
     image/cani/male0259.png
     image/cani/male0260.png
     image/cani/male0261.png
     image/cani/male0262.png
     image/cani/male0263.png
     image/cani/male0264.png
     image/cani/male0265.png
     image/cani/male0266.png
     image/cani/male0267.png
     image/cani/male0268.png
     image/cani/male0269.png
     image/cani/male0270.png
     image/cani/male0271.png
     image/cani/male0272.png
     image/cani/male0273.png
     image/cani/male0274.png
     image/cani/male0275.png
     image/cani/male0276.png
     image/cani/male0277.png
     image/cani/male0278.png
     image/cani/male0279.png
     image/cani/male0280.png
     image/cani/male0281.png
     image/cani/male0282.png
     image/cani/male0283.png
     image/cani/male0284.png
     image/cani/male0285.png
     image/cani/male0286.png
     image/cani/male0287.png
     image/cani/male0288.png
     image/cani/male0289.png
     image/cani/male0290.png
     image/cani/male0291.png
     image/cani/male0292.png
     image/cani/male0293.png
     image/cani/male0294.png
     image/cani/male0295.png
     image/cani/male0296.png
     image/cani/male0297.png
     image/cani/male0298.png
     image/cani/male0299.png
     image/cani/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
