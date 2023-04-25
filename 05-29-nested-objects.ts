type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSongDetails(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 123456,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

console.log(calculatePayout(mySong));
// 407.4048
console.log(printSongDetails(mySong));
// Unchained Melody - Righteous Brothers
