
import { Portfolio } from "@/components/Portfolio";

type Language = 'ru' | 'en' | 'sv';

interface MakeupPortfolioProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const makeupCategories = [
  {
    id: "bridal",
    name: {
      ru: "Свадебный макияж",
      en: "Bridal Makeup",
      sv: "Brudsmink"
    },
    description: {
      ru: "Профессиональный свадебный макияж для особого дня",
      en: "Professional bridal makeup for your special day",
      sv: "Professionell brudsmink för din speciella dag"
    },
    images: [
      "/lovable-uploads/portfolio/makeup/weddings/119469336_3567765203241639_3853288691008154520_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/120025039_3596662397018586_2357994107717692277_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/120075189_3596665893684903_6041795725870268265_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/123765809_3736933596324798_8014550079868587831_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/124246435_3736216056396552_1198323240008236774_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/124249573_3736214606396697_2694012732524938240_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/125447587_3756794561005368_7057262018250249831_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/148476512_3987007034650785_1230517660365676846_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/45501812_2153928287958678_864298370875785216_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/487315050_1248892933903091_7588472909687349695_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/487824171_1248367273955657_1908427134526839609_n.jpg",
      "/lovable-uploads/portfolio/makeup/weddings/487839734_1248377957287922_1868484741871861467_n.jpg"
    ]
  },
  {
    id: "evening",
    name: {
      ru: "Вечерний макияж",
      en: "Evening Makeup",
      sv: "Kvällsmink"
    },
    description: {
      ru: "Вечерний и праздничный макияж для особых мероприятий",
      en: "Evening and special occasion makeup",
      sv: "Kväll- och festsmink"
    },
    images: [
      "/lovable-uploads/portfolio/makeup/evening/120039693_3595156343835858_1363037131745676320_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/121067271_3643130989038393_7025255472894117789_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/121660093_3669137299771095_309858848099277058_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/125472110_3756892837662207_8352137575621363534_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/134850293_3881474301870726_3364505346716546505_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/134931745_3881502751867881_4189283773111317630_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/137596305_3905507286134094_1868235522506526263_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/138054534_3905679192783570_5018740541875405667_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/474580491_1188978063227912_8518952655062218129_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/480198877_1209585721167146_63872853376555102_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/482320098_1227872352671816_1448923526298211296_n.jpg",
      "/lovable-uploads/portfolio/makeup/evening/487131182_1247527380706313_1088492971609135705_n.jpg"
    ]
  },
  {
    id: "creative",
    name: {
      ru: "Креативный макияж",
      en: "Creative Makeup",
      sv: "Kreativ makeup"
    },
    description: {
      ru: "Уникальный креативный макияж для фотосессий и особых проектов",
      en: "Unique creative makeup for photoshoots and special projects",
      sv: "Unik kreativ makeup för fotograferingar och speciella projekt"
    },
    images: [
      "/lovable-uploads/portfolio/makeup/creative/119357286_3564842683533891_6702303304565515804_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/121055869_3640482619303230_2848962718217326138_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/125534868_3758552967496194_7506708453469787013_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/131317769_3832413276776829_6434976444951692334_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/131551577_3836827009668789_4525990942725545952_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/137096958_3899964906688332_8631926845554381036_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/471917208_9356505071034261_8380166043559125495_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/474695172_1188987956560256_6776969911378839392_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/480093103_1206774891448229_2477117929245895282_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/481341689_1221944216597963_2686226704185628161_n.jpg",
      "/lovable-uploads/portfolio/makeup/creative/482243771_1229051772553874_498125388033098833_n.jpg"
    ]
  },
  {
    id: "halloween",
    name: {
      ru: "Хэллоуин макияж",
      en: "Halloween Makeup",
      sv: "Halloween smink"
    },
    description: {
      ru: "Специальный макияж для Хэллоуина и тематических вечеринок",
      en: "Special makeup for Halloween and themed parties",
      sv: "Speciell smink för Halloween och temafester"
    },
    images: [
      "/lovable-uploads/portfolio/makeup/halloween/45544782_2152537094764464_205427177666117632_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/45593392_2152536868097820_6695495857141186560_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/45625334_2152536438097863_8746561466485702656_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/45626288_2152536614764512_3334944278873899008_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/45627114_2153427751342065_8243664188178694144_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/45643875_2152535424764631_7347029841754980352_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/45665196_2152534961431344_8284548621819445248_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/45688704_2152535511431289_2689886967503519744_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/481075207_1221943253264726_4564112553727247990_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/481108935_1221942399931478_5225884103572578963_n.jpg",
      "/lovable-uploads/portfolio/makeup/halloween/481303510_1221942249931493_1636259424663113619_n.jpg"
    ]
  },
  {
    id: "facepaint",
    name: {
      ru: "Фейс-арт",
      en: "Face Paint",
      sv: "Ansiktsmålning"
    },
    description: {
      ru: "Художественная роспись лица для детей и взрослых",
      en: "Artistic face painting for kids and adults",
      sv: "Konstnärlig ansiktsmålning för barn och vuxna"
    },
    images: [
      "/lovable-uploads/portfolio/makeup/facepaint/479888454_1231765078949210_1932929763718154532_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/480288322_1231765528949165_8504659774983668747_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/480572583_1231765378949180_3176032217281198024_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/482033007_1231765218949196_4025213642908264464_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/483066459_1233025152156536_4403165056461637173_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/483067840_1233025278823190_8026013531529061211_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/483099158_1233025272156524_7751761207433383321_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/483100689_1233026538823064_6183505803839766098_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/483102816_1233026305489754_2219367181236675966_n.jpg",
      "/lovable-uploads/portfolio/makeup/facepaint/483103420_1233025178823200_129482978618892715_n.jpg"
    ]
  },
  {
    id: "hair",
    name: {
      ru: "Прически",
      en: "Hairstyling",
      sv: "Hårstyling"
    },
    description: {
      ru: "Профессиональные прически для любых мероприятий",
      en: "Professional hairstyling for any event",
      sv: "Professionell hårstyling för alla tillfällen"
    },
    images: [
      "/lovable-uploads/portfolio/makeup/hair/119000681_3547353675282792_8921858811593590604_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/120087877_3600022240015935_1459006898619716791_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/135017094_3881481355203354_6655390772233503517_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/147722411_3987007387984083_9076359151090582037_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/45482598_2152516474766526_929516976819142656_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/45583932_2152516368099870_6347444935972618240_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/45600085_2152516581433182_4103993709782106112_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/45710340_2152516261433214_3307529953595097088_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/476163236_1200935718698813_6807597623100137975_n.jpg",
      "/lovable-uploads/portfolio/makeup/hair/476238914_1200944222031296_3003868897624351211_n.jpg"
    ]
  },
  {
    id: "business",
    name: {
      ru: "Бизнес макияж",
      en: "Business Makeup",
      sv: "Affärsmakeup"
    },
    description: {
      ru: "Профессиональный деловой макияж",
      en: "Professional business makeup",
      sv: "Professionell affärsmakeup"
    },
    images: [
      "/lovable-uploads/portfolio/makeup/business/119241932_3564669093551250_4514311105007398743_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/137381473_3902991383052351_470512403376339522_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/45743071_2153841454634028_1704294936322506752_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/45935592_2156554267696080_8504503672393170944_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/46039329_2153841467967360_8646731707673739264_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/46057198_2156584207693086_1214035371650711552_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/46712056_2177551415596365_8838591521738457088_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/480213995_1208936534565398_1911727468254174827_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/487523519_1247597090699342_3125075079114619117_n.jpg",
      "/lovable-uploads/portfolio/makeup/business/495451942_1287345970057787_86022192767237760_n.jpg"
    ]
  },
  {
    id: "diplomas",
    name: {
      ru: "Дипломы",
      en: "Diplomas",
      sv: "Diplom"
    },
    description: {
      ru: "Мои профессиональные сертификаты",
      en: "My professional certifications",
      sv: "Mina professionella certifieringar"
    },
    images: [
      "/lovable-uploads/portfolio/makeup/diplomas/136677608_3893117484039741_2733495481426255664_n.jpg",
      "/lovable-uploads/portfolio/makeup/diplomas/497623495_1291416092984108_5298693114041761031_n.jpg"
    ]
  }
];

const MakeupPortfolio = ({ currentLang, onLanguageChange }: MakeupPortfolioProps) => {
  return (
    <Portfolio 
      title={{
        ru: "Портфолио макияжа",
        en: "Makeup Portfolio",
        sv: "Sminkportfölj"
      }}
      categories={makeupCategories}
      currentLang={currentLang}
      onLanguageChange={onLanguageChange}
    />
  );
};

export default MakeupPortfolio;
