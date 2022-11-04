let r;
let g;
let b;
let val;
let val2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  fill("#000000");
  textSize(32);
  text("rgba(255,255,255,1)", 310, 33);
  text("rgba(0,0,0,1)", 310, 71);
  line(0, 88, windowWidth, 88);
  button = createButton("abt me");
  button.position(10, 10);
  button.mousePressed(abtme);
  button.size(160, 68);
  button.style("background-color", "#000000");
  button.style("color", "#FFFFFF");
  button.style("border", "none");
  button.style("font-size", "32px");
  button2 = createButton("linkz");
  button2.mousePressed(linkz);
  button2.position(180, 10);
  button2.size(120, 68);
  button2.style("background-color", "#000000");
  button2.style("color", "#FFFFFF");
  button2.style("border", "none");
  button2.style("font-size", "32px");
}

function basic() {
  r = random(255);
  g = random(255);
  b = random(255);
  val = color(r, g, b);
  background(val);
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  val2 = color(r, g, b);
  line(0, 88, windowWidth, 88);
  textSize(32);
  fill(val2);
  text(val, 310, 33);
  text(val2, 310, 71);
  strokeWeight(2)
  stroke(val2);
  line(0, 88, windowWidth, 88);
  noStroke();
  button2.style("background-color", val2);
  button2.style("color", val);
  button.style("background-color", val2);
  button.style("color", val);
  spotifyButton = createButton('spotify');
  githubButton = createButton('github');
  spotifyButton.hide();
  githubButton.hide();
}

function spotifyLink() {
  window.open("https://open.spotify.com/user/31bvpx26ymdjb3orkhtvmanuoqkq");
}

function githubLink() {
  window.open("https://github.com/cavegoblin");
}

function abtme() {
  basic()
  textWrap(WORD);
  text(
    "Hi! I'm Eli and I use he/him pronouns. I like to code and draw, I guess.", 8, 96, windowWidth);
  spotifyButton.hide()
  githubButton.hide()
}

function linkz() {
  basic()
  spotifyButton.show();
  spotifyButton.size(140, 68);
  spotifyButton.position(10, 98);
  spotifyButton.style("border", "none");
  spotifyButton.style("font-size", "32px");
  spotifyButton.style("color", val);
  spotifyButton.style("background-color", val2);
  spotifyButton.mousePressed(spotifyLink());
  githubButton.show();
  githubButton.size(132, 68);
  githubButton.position(160, 98);
  githubButton.style("border", "none");
  githubButton.style("font-size", "32px");
  githubButton.style("color", val);
  githubButton.style("background-color", val2);
  githubButton.mousePressed(githubLink());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  basic()
}
