import { Portfolio } from "@/components/Portfolio";

const categories = [
  {
    id: "wedding",
    name: "Wedding",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed"
    ]
  },
  {
    id: "fashion",
    name: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae"
    ]
  },
  {
    id: "business",
    name: "Business Portrait",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    ]
  }
];

const PhotographyPortfolio = () => {
  return <Portfolio title="Photography Portfolio" categories={categories} />;
};

export default PhotographyPortfolio;