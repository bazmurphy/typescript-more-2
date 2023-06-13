"use strict";
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSongDetails(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
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
