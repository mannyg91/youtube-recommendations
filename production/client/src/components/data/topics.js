import all from "./all";
import business from "./business";
import entertainment from "./entertainment";
import fashion from "./fashion";
import fitness from "./fitness";
import food from "./food";
import gaming from "./gaming";
import hobby from "./hobby";
import knowledge from "./knowledge";
import lifestyle from "./lifestyle";
import military from "./military";
import movies from "./movies";
import music from "./music";
import performing_arts from "./performing_arts";
import pets from "./pets";
import politics from "./politics";
import religion from "./religion";
import society from "./society";
import sports from "./sports";
import technology from "./technology";
import tourism from "./tourism";
import vehicles from "./vehicles";
import beauty from "./beauty";
import health from "./health";




// const defaultTopics = [
//   { id: "/m/04rlf", name: "Music", parent: true },
//   { id: "/m/02mscn", name: "Christian music" },
//   { id: "/m/0ggq0m", name: "Classical music" },
//   { id: "/m/01lyv", name: "Country" },
//   { id: "/m/02lkt", name: "Electronic music" },
//   { id: "/m/0glt670", name: "Hip hop music" },
//   { id: "/m/05rwpb", name: "Independent music" },
//   { id: "/m/03_d0", name: "Jazz" },
//   { id: "/m/028sqc", name: "Music of Asia" },
//   { id: "/m/0g293", name: "Music of Latin America" },
//   { id: "/m/064t9", name: "Pop music" },
//   { id: "/m/06cqb", name: "Reggae" },
//   { id: "/m/06j6l", name: "Rhythm and blues" },
//   { id: "/m/06by7", name: "Rock music" },
//   { id: "/m/0gywn", name: "Soul music" },
//   { id: "/m/0bzvm2", name: "Gaming", parent: true },
//   { id: "/m/025zzc", name: "Action game" },
//   { id: "/m/02ntfj", name: "Action-adventure game" },
//   { id: "/m/0b1vjn", name: "Casual game" },
//   { id: "/m/02hygl", name: "Music video game" },
//   { id: "/m/04q1x3q", name: "Puzzle video game" },
//   { id: "/m/01sjng", name: "Racing video game" },
//   { id: "/m/0403l3g", name: "Role-playing video game" },
//   { id: "/m/021bp2", name: "Simulation video game" },
//   { id: "/m/022dc6", name: "Sports game" },
//   { id: "/m/03hf_rm", name: "Strategy video game" },
//   { id: "/m/06ntj", name: "Sports", parent: true },
//   { id: "/m/0jm_", name: "American football" },
//   { id: "/m/018jz", name: "Baseball" },
//   { id: "/m/018w8", name: "Basketball" },
//   { id: "/m/01cgz", name: "Boxing" },
//   { id: "/m/09xp_", name: "Cricket" },
//   { id: "/m/02vx4", name: "Football" },
//   { id: "/m/037hz", name: "Golf" },
//   { id: "/m/03tmr", name: "Ice hockey" },
//   { id: "/m/01h7lh", name: "Mixed martial arts" },
//   { id: "/m/0410tth", name: "Motorsport" },
//   { id: "/m/07bs0", name: "Tennis" },
//   { id: "/m/07_53", name: "Volleyball" },
//   { id: "/m/02jjt", name: "Entertainment", parent: true },
//   { id: "/m/09kqc", name: "Humor" },
//   { id: "/m/02vxn", name: "Movies" },
//   { id: "/m/05qjc", name: "Performing arts" },
//   { id: "/m/066wd", name: "Professional wrestling" },
//   { id: "/m/0f2f9", name: "TV shows" },
//   { id: "/m/019_rr", name: "Lifestyle", parent: true },
//   { id: "/m/032tl", name: "Fashion" },
//   { id: "/m/027x7n", name: "Fitness" },
//   { id: "/m/02wbm", name: "Food" },
//   { id: "/m/03glg", name: "Hobby" },
//   { id: "/m/068hy", name: "Pets" },
//   { id: "/m/041xxh", name: "Physical attractiveness [Beauty]" },
//   { id: "/m/07c1v", name: "Technology" },
//   { id: "/m/07bxq", name: "Tourism" },
//   { id: "/m/07yv9", name: "Vehicles" },
//   { id: "/m/098wr", name: "Society", parent: true },
//   { id: "/m/09s1f", name: "Business", keywords: business },
//   { id: "/m/0kt51", name: "Health" },
//   { id: "/m/01h6rj", name: "Military" },
//   { id: "/m/05qt0", name: "Politics" },
//   { id: "/m/06bvp", name: "Religion" },
//   { id: "/m/01k8wb", name: "Knowledge" }
// ];

const appTopics = [
  { id: null, name: "All", keywords: all },
  { id: "/m/04rlf", name: "Music", keywords: music },
  { id: "/m/0bzvm2", name: "Gaming", keywords: gaming },
  { id: "/m/06ntj", name: "Sports", keywords: sports },
  { id: "/m/02jjt", name: "Entertainment", keywords: entertainment },
  { id: "/m/02vxn", name: "Movies", keywords: movies },
  { id: "/m/05qjc", name: "Performing arts", keywords: performing_arts },
  { id: "/m/019_rr", name: "Lifestyle", keywords: lifestyle },
  { id: "/m/032tl", name: "Fashion", keywords: fashion },
  { id: "/m/027x7n", name: "Fitness", keywords: fitness },
  { id: "/m/02wbm", name: "Food", keywords: food },
  { id: "/m/03glg", name: "Hobby", keywords: hobby },
  { id: "/m/068hy", name: "Pets", keywords: pets },
  { id: "/m/041xxh", name: "Beauty", keywords: beauty },
  { id: "/m/07c1v", name: "Technology", keywords: technology },
  { id: "/m/07bxq", name: "Tourism", keywords: tourism },
  { id: "/m/07yv9", name: "Vehicles", keywords: vehicles },
  { id: "/m/098wr", name: "Society", keywords: society },
  { id: "/m/09s1f", name: "Business", keywords: business },
  { id: "/m/0kt51", name: "Health", keywords: health },
  { id: "/m/01h6rj", name: "Military", keywords: military },
  { id: "/m/05qt0", name: "Politics", keywords: politics },
  { id: "/m/06bvp", name: "Religion", keywords: religion },
  { id: "/m/01k8wb", name: "Knowledge", keywords: knowledge }
  ];


export default appTopics;