import SingleVideo from "./SingleVideo";

const AllVideos = () => {
  const videos = [
    {
      postId: "9e20ef0d-17fe-4317-a2f8-5d601d507761",
      creator: {
        name: "soniya",
        id: "e70c3bbb-eec9-4a44-82ca-d69d5ce2a213",
        handle: "soniyabora08",
        pic: "https://cdn.gro.care/6ce188269916_1667990600681.bin",
      },
      comment: {
        count: 2,
        commentingAllowed: true,
      },
      reaction: {
        count: 31,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/755d5af44c54_1683463531570.mp4",
        thumbnail: "https://cdn.gro.care/53d5e59f202d_1683463530883.jpeg",
        hyperlink: "https://links.gro.care/soBWbj3vC1A8ZnVd6",
        placeholderUrl: "https://cdn.gro.care/9816dd99598c_1661257637720.bin",
      },
    },
    {
      postId: "996a8249-0266-4340-8721-fb2566bed5ba",
      creator: {
        id: "f1268fe7-5cd2-4b2c-9011-c17ea743473e",
        handle: "akash.kumaxr",
        pic: "https://content-uploads-staging.s3.ap-south-1.amazonaws.com/3e7f4ad1c192_1656761968708.png",
      },
      comment: {
        count: 0,
        commentingAllowed: true,
      },
      reaction: {
        count: 15,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/8867ad63dd5e_1683462552576.mp4",
        thumbnail: "https://cdn.gro.care/17af050fdd9f_1683462551951.jpeg",
        hyperlink: "https://links.gro.care/C91ZXHXMQWUDWnYc6",
        placeholderUrl: "https://cdn.gro.care/02697b72519e_1661257638369.bin",
      },
    },
    {
      postId: "6f3925c7-d013-4724-a93f-c8bd4e00fd74",
      creator: {
        name: "Mister prophase",
        id: "e990de72-7920-4615-8551-9cc6b8cd906b",
        handle: "mister_prophase",
        pic: "https://cdn.gro.care/47395a819002_1680251084562.webp",
      },
      comment: {
        count: 0,
        commentingAllowed: true,
      },
      reaction: {
        count: 12,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/0a91160b6b2a_1683380517268.mp4",
        thumbnail: "https://cdn.gro.care/e38cd1828c95_1683380516526.jpeg",
        hyperlink: "https://links.gro.care/LeTAyrBV41wH8cBV9",
        placeholderUrl: "https://cdn.gro.care/1b5b9c01ec5c_1661257637653.bin",
      },
    },
    {
      postId: "28d47ea0-f229-4dbd-81c3-28675c18fb4e",
      creator: {
        name: "Gaurav Amodkar",
        id: "4c56e63f-5524-4724-9382-8f930e128ba3",
        handle: "gaurav_amodkar_official",
        pic: "https://cdn.gro.care/1b46e06ac19a_1680921752863.jpeg",
      },
      comment: {
        count: 0,
        commentingAllowed: true,
      },
      reaction: {
        count: 4,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/e06ac1bdc26a_1683966861478.mp4",
        thumbnail: "https://cdn.gro.care/24b1527bfc1d_1683966860686.jpeg",
        hyperlink: "https://links.gro.care/Y3Qu8w527PParUGe9",
        placeholderUrl: "https://cdn.gro.care/02697b72519e_1661257638369.bin",
      },
    },
    {
      postId: "84d07450-7d1b-45a0-8f87-dc8dc69c1f40",
      creator: {
        name: "Abhishek Mehra",
        id: "ed4de405-097d-48c6-aab0-1965897f3c89",
        handle: "im_abhisrk",
        pic: "https://content-uploads-staging.s3.ap-south-1.amazonaws.com/f4c93c159040_1659291526122.bin",
      },
      comment: {
        count: 0,
        commentingAllowed: true,
      },
      reaction: {
        count: 2,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/3186578a3875_1683797695812.mp4",
        thumbnail: "https://cdn.gro.care/92c583b492c5_1683797695165.jpeg",
        hyperlink: "https://links.gro.care/zQQbT2XSbgrSvU7fA",
        placeholderUrl: "https://cdn.gro.care/eb37f38b95f9_1661257638053.bin",
      },
    },
    {
      postId: "c2c4672d-5b85-47d9-a683-3db3be8fe979",
      creator: {
        name: "Abhay Rana ",
        id: "08b2a12b-6e46-4a9f-a2f9-04d2f2879d42",
        handle: "realabhay",
        pic: "https://cdn.gro.care/746707b788da_1677329395416.webp",
      },
      comment: {
        count: 2,
        commentingAllowed: true,
      },
      reaction: {
        count: 6,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/f2995d1631ae_1683531568180.mp4",
        thumbnail: "https://cdn.gro.care/0fc20440b4e0_1683531566754.jpeg",
        hyperlink: "https://links.gro.care/j5SvWB4wR1rV3FeW8",
        placeholderUrl: "https://cdn.gro.care/9816dd99598c_1661257637720.bin",
      },
    },
    {
      postId: "83dde137-509d-4083-a1bd-5164b87809d3",
      creator: {
        name: "Ankita Sharma",
        id: "c4e99a92-8805-434d-8e40-41d2fe720cfc",
        handle: "anki_9686",
        pic: "https://cdn.gro.care/8449233fcde8_1679559395383.webp",
      },
      comment: {
        count: 0,
        commentingAllowed: true,
      },
      reaction: {
        count: 7,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/f04c7e2004b0_1683610091230.mp4",
        thumbnail: "https://cdn.gro.care/c7d87b799930_1683610090391.jpeg",
        hyperlink: "https://links.gro.care/WuSuypM7Aqyuwt8E9",
        placeholderUrl: "https://cdn.gro.care/63ea757b223d_1661257638440.bin",
      },
    },
    {
      postId: "7ada02c7-2dd0-4af9-b3b1-e6c4aa4242ef",
      creator: {
        name: "VirpalSinghRajput",
        id: "37754f3a-a7ae-454c-bb48-757139559e8e",
        handle: "virpalsinghrajput",
        pic: "https://cdn.gro.care/137080e3dcf5_1679671314352.webp",
      },
      comment: {
        count: 0,
        commentingAllowed: true,
      },
      reaction: {
        count: 2,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/edfdce5bbf61_1684049850831.mp4",
        thumbnail: "https://cdn.gro.care/2206d59cabcc_1684049850205.jpeg",
        hyperlink: "https://links.gro.care/EYpDLicjV2CQNdwL9",
        placeholderUrl: "https://cdn.gro.care/eb37f38b95f9_1661257638053.bin",
      },
    },
    {
      postId: "742f3324-8c8e-4f34-af38-4652478c1f5a",
      creator: {
        name: "Rahat khan",
        id: "874e37cb-8e25-4762-8a76-3b2a2197b443",
        handle: "rahatyashmin_khn_",
        pic: "https://cdn.gro.care/8cb5b65dc3ae_1684504591011.webp",
      },
      comment: {
        count: 0,
        commentingAllowed: true,
      },
      reaction: {
        count: 10,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/917ca4e8ad2a_1683555288138.mp4",
        thumbnail: "https://cdn.gro.care/8cd7dbbb8030_1683555287357.jpeg",
        hyperlink: "https://links.gro.care/tAmeK4cNYoGonkT76",
        placeholderUrl: "https://cdn.gro.care/1b5b9c01ec5c_1661257637653.bin",
      },
    },
    {
      postId: "c1860001-deea-48de-bfc8-bd63774293a8",
      creator: {
        name: "Abhishek Choudhary",
        id: "356a706b-164b-4b7a-b384-2774b9be5cca",
        handle: "ab.ch.nerd",
        pic: "https://cdn.gro.care/82db1d069261_1683715293623.webp",
      },
      comment: {
        count: 1,
        commentingAllowed: true,
      },
      reaction: {
        count: 3,
        voted: false,
      },
      submission: {
        title: "Random Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
        mediaUrl: "https://cdn.gro.care/4eedf7fd21da_1683614683244.mp4",
        thumbnail: "https://cdn.gro.care/e608eec85b74_1683614682571.jpeg",
        hyperlink: "https://links.gro.care/CfgN7ciouJNuize26",
        placeholderUrl: "https://cdn.gro.care/d888b02dd225_1661257637560.bin",
      },
    },
  ];
  return (
    <div key="allVideos">
      <h1 className="font-primary text-white">All videos to showcase</h1>
      <div
        key="container"
        className="w-[90%]  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
      >
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
        <SingleVideo />
      </div>
    </div>
  );
};

export default AllVideos;
