export interface PersonalData {
  name: string;
  summary: string;
  interests: string[];
  links: {
    instagram: string;
    spotify: string;
  };
  linksImage: {
    instagram: string;
    spotify: string;
  };
}

export const myPersonalData: PersonalData = {
  name: "Jvmntr",
  summary: "Olá, eu sou o Jonh, o cara por trás do 'Jvmntr', desde pequeno sou vidrado em tecnologia, jogos, música e tudo que envolve esse universo. Com o tempo, a paixão pela música cresceu e hoje me expresso muito através da guitarra. Também sou fã de jogos como The legend of Zelda, Dark Souls, Bloodborne e Sekiro quanto mais difícil, melhor!",
  interests: ["👽 Djent e metalcore", "🎬 Cinema", "🚀 Ficção Científica ", "🍜 Culinária", "🔥 Jogos Soulslike", "🎮 Game development"],
  links: {
    instagram: "https://www.instagram.com/jvmntr/",
    spotify: "https://open.spotify.com/user/q54qdamnd4sexjixw69wel2ad?si=3d089248b9c8409d",
  },
  linksImage:{
    instagram: "instagram.svg",
    spotify: "spotify.svg",
  }
};