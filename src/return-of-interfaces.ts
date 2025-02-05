export {};

class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {}

interface Kenja {
  ionazun(): void;
  //voidは返り値がないことを示す シグネチャと呼ぶ

}
interface Senshi {
  kougeki(): void;
  //voidは返り値がないことを示す シグネチャと呼ぶ
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}


const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
