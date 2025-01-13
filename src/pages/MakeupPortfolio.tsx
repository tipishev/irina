import { Portfolio } from "@/components/Portfolio";

const categories = [
  {
    id: "bridal",
    name: "Bridal",
    images: [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda",
      "https://images.unsplash.com/photo-1532487619239-47e7e6d6c549"
    ]
  },
  {
    id: "evening",
    name: "Evening",
    images: [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
      "https://images.unsplash.com/photo-1526045478516-99145907023c",
      "https://images.unsplash.com/photo-1512257640574-7a89f477b3a5"
    ]
  },
  {
    id: "natural",
    name: "Natural",
    images: [
      "https://images.unsplash.com/photo-1503236823255-94609f598e71",
      "https://images.unsplash.com/photo-1522337094846-8a818192de1f",
      "https://images.unsplash.com/photo-1512331455279-c8ae8178f586"
    ]
  }
];

const MakeupPortfolio = () => {
  return <Portfolio title="Makeup Portfolio" categories={categories} />;
};

export default MakeupPortfolio;