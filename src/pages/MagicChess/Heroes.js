import { getCombinations } from '../../utils/Combinations.js';
import {
  WeaponMaster,
  Summoner,
  Archer,
  Elementalist,
  Mage,
  Guardian,
  Gunner,
  Wrestler,
  Swordsman,
  NatureSpirit,
  AblazeBounties,
  AstroPower,
  SaberFaction,
  Prince,
  CadiaRiverlands,
  WyrmslayerWarrior,
  NorthernVale,
  ForsakenLight,
  Necrokeep,
  MysticBureau,
} from './Synergy.js';

class Hero {
  constructor(name, cost, roles = [], factions = []) {
    this.name = name;
    this.cost = cost;
  }
}

const Atlas = new Hero('Atlas', 3, [WeaponMaster], [NatureSpirit]);
const Franco = new Hero(
  'Franco',
  2,
  [WeaponMaster],
  [AblazeBounties, NorthernVale],
);
const Martis = new Hero('Martis', 1, [WeaponMaster], [AstroPower]);
const Freya = new Hero(
  'Freya',
  3,
  [WeaponMaster],
  [SaberFaction, NorthernVale],
);
const Zilong = new Hero('Zilong', 4, [WeaponMaster], [CadiaRiverlands]);
const Julian = new Hero('Julian', 4, [WeaponMaster, Mage], [ForsakenLight]);
const Leomord = new Hero('Leomord', 5, [WeaponMaster], [Necrokeep]);
const Alpha = new Hero('Alpha', 1, [WeaponMaster], [MysticBureau]);
const Zhask = new Hero('Zhask', 1, [Summoner], [AstroPower]);
const Sun = new Hero('Sun', 5, [Summoner], [CadiaRiverlands]);
const Vexana = new Hero('Vexana', 4, [Summoner], [Necrokeep]);
const PopolKupa = new Hero('Popol and Kupa', 3, [Summoner], [MysticBureau]);
const Miya = new Hero('Miya', 1, [Archer], [NatureSpirit]);
const Irithel = new Hero('Irithel', 2, [Archer], [AstroPower]);
const Moskov = new Hero('Moskov', 4, [Archer], [Prince]);
const Wanwan = new Hero('Wanwan', 3, [Archer], [CadiaRiverlands]);
const Melissa = new Hero('Melissa', 2, [Archer], [ForsakenLight]);
const Hanabi = new Hero('Hanabi', 5, [Archer], [MysticBureau]);
const Eudora = new Hero('Eudora', 2, [Elementalist], [NatureSpirit]);
const Rafaela = new Hero('Rafaela', 2, [Elementalist], [SaberFaction]);
const LouYi = new Hero('Lou Yi', 3, [Elementalist], [CadiaRiverlands]);
const Valir = new Hero('Valir', 1, [Elementalist], [WyrmslayerWarrior]);
const Aurora = new Hero('Aurora', 4, [Elementalist], [NorthernVale]);
const Xavier = new Hero('Xavier', 3, [Elementalist], [ForsakenLight]);
const Kadita = new Hero('Kadita', 4, [Mage], [NatureSpirit]);
const Esmeralda = new Hero('Esmeralda', 3, [Mage], [AblazeBounties]);
const Cyclops = new Hero('Cyclops', 2, [Mage], [SaberFaction]);
const Faramis = new Hero('Faramis', 2, [Mage], [Necrokeep]);
const Kagura = new Hero('Kagura', 3, [Mage], [MysticBureau]);
const Belerick = new Hero('Belerick', 3, [Guardian], [NatureSpirit]);
const Minotaur = new Hero('Minotaur', 5, [Guardian], [AstroPower]);
const Johnson = new Hero('Johnson', 4, [Guardian], [SaberFaction]);
const Akai = new Hero('Akai', 1, [Guardian], [CadiaRiverlands]);
const Estes = new Hero('Estes', 4, [Guardian], [WyrmslayerWarrior]);
const Roger = new Hero('Roger', 2, [Gunner], [NatureSpirit]);
const Claude = new Hero('Claude', 4, [Gunner], [AblazeBounties]);
const Layla = new Hero('Layla', 1, [Gunner], [SaberFaction]);
const Kimmy = new Hero('Kimmy', 2, [Gunner], [WyrmslayerWarrior]);
const Bane = new Hero('Bane', 5, [Gunner], [NorthernVale]);
const Clint = new Hero('Clint', 1, [Gunner], [MysticBureau]);
const Aldous = new Hero('Aldous', 3, [Wrestler], [AblazeBounties]);
const Badang = new Hero('Badang', 4, [Wrestler], [AstroPower]);
const Dyrroth = new Hero('Dyrroth', 3, [Wrestler], [Prince]);
const Chou = new Hero('Chou', 2, [Wrestler], [CadiaRiverlands]);
const Masha = new Hero('Masha', 3, [Wrestler], [WyrmslayerWarrior]);
const Yin = new Hero('Yin', 2, [Wrestler], [ForsakenLight]);
const Karina = new Hero('Karina', 3, [Swordsman], [AstroPower]);
const Saber = new Hero('Saber', 2, [Swordsman], [SaberFaction]);
const Lance = new Hero('Lance', 3, [Swordsman], [WyrmslayerWarrior]);
const Ling = new Hero('Ling', 5, [Swordsman], [WyrmslayerWarrior]);
const Hayabusa = new Hero('Hayabusa', 4, [Swordsman], [MysticBureau]);

const listOfHeroes = [
  Atlas,
  Franco,
  Martis,
  Freya,
  Zilong,
  Julian,
  Leomord,
  Alpha,
  Zhask,
  Sun,
  Vexana,
  PopolKupa,
  Miya,
  Irithel,
  Moskov,
  Wanwan,
  Melissa,
  Hanabi,
  Eudora,
  Rafaela,
  LouYi,
  Valir,
  Aurora,
  Xavier,
  Kadita,
  Esmeralda,
  Cyclops,
  Faramis,
  Kagura,
  Belerick,
  Minotaur,
  Johnson,
  Akai,
  Estes,
  Roger,
  Claude,
  Layla,
  Kimmy,
  Bane,
  Clint,
  Aldous,
  Badang,
  Dyrroth,
  Chou,
  Masha,
  Yin,
  Karina,
  Saber,
  Lance,
  Ling,
  Hayabusa,
];
console.log(listOfHeroes.length);
