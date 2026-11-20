const firstName = "Georgia";
const nameLength = firstName.length;

function sayMyName(fullName) {
  console.log(`You acting kind of shady, ain't callin' me ${fullName}`);
}

sayMyName("Beyonce", "Knowles");

interface Painter {
  finish(): boolean;
  ownMaterials: Material[];
  paint(painting: string, materials: Material[]): boolean;
}

function paintPainting(painter: Painter, painting: string): boolean {
  painter.finish();
}

let bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect";

let rocker;

rocker = "Joan Jett";
rocker.toUpperCase();

rocker = 19.58;
rocker.toPrecision(1);

rocker.toUppercase();
