// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html

type Colors = "red" | "green" | "blue";

type RGB = [red: number, green: number, blue: number];

// ❌ exemplo 1
const palleteExemplo1: Record<Colors, string | RGB> = {
    red: [255,0,0],
    green: "#00f00",
    blue: [0,0,255]
};

// ❌ Má prática 
// (property) red: string | RGB no entanto o nosso red é do tipo RGB
const redComponentExemplo1 = palleteExemplo1.red.at(0);
// Property 'toUpperCase' does not exist on type 'RGB'
const greenComponentExemplo1 = palleteExemplo1.green.toUpperCase();

// ✅ exemplo 2 
const palleteExemplo2 = {
    red: [255,0,0],
    green: "#00f00",
    blue: [0,0,255]
} satisfies Record<Colors, string | RGB>;

// ✅ Boa prática 
// (property) red: [number, number, number]
const redComponentExemplo2 = palleteExemplo2.red.at(0);
// (property) green: string
const greenComponentExemplo2 = palleteExemplo2.green.toUpperCase();

// ❌ exemplo 3
// devemos ter a keys exactas tal como defenimos no type Colors
const palleteExemplo3 = {
    "red": "yes",
    "green": false,
    "blue": "kinda",
    "platypus": false
//  ~~~~~~~~~~ error - Object literal may only specify known properties, and '"platypus"' does not exist in type 'Record<Colors, unknown>'.
} satisfies Record<Colors, unknown>;
// todas as propriedades sobre 'red', 'green', e 'blue' são mantidas
const g: boolean = palleteExemplo3.green;

// ❌ exemplo 4
const paletteExemplo4 = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0]
    //    ~~~~~~ error: type '[number, number]' is not assignable to type 'string'.
} satisfies Record<string, string | RGB>;
// todas as propriedades sobre 'red', 'green' são mantidas
const redComponentExemplo3 = paletteExemplo4.red.at(0);
const greenComponentExemplo3 = paletteExemplo4.green.toUpperCase();


export {}