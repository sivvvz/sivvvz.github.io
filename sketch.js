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
  colorMode(RGB, 255);
  stroke(val2);
  line(0, 88, windowWidth, 88);
  noStroke();
  button2.style("background-color", val2);
  button2.style("color", val);
  button.style("background-color", val2);
  button.style("color", val);
}

function openlink(link) {
  window.open(link);
}

function basiclinkz() {
  button3 = createButton('spotify')
  button3.size(140, 68);
  button3.position(10, 98);
  button3.style("border", "none");
  button3.style("font-size", "32px");
  button3.style("color", val);
  button3.style("background-color", val2);                    button3.mousePressed(openlink('https://open.spotify.com/user/31bvpx26ymdjb3orkhtvmanuoqkq'));
}

function abtme() {
  basic()
  textWrap(WORD);
  text(
    "Hi! I'm Eli and I use he/him pronouns. I like to code and draw, I guess.", 8, 96, windowWidth);
    button3.hide()
}

function linkz() {
  basic()
  basiclinkz()
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
