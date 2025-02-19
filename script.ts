console.log("ciao sono typescript");

// 1) Quali sono i tipi primitivi principali in TypeScript?
console.log("i tipi primitivi principali in ts sono la string , il number, il null, l'undefined, il boolean, never e l'any ");

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript

let myName: string = "Davide";
let age: number = 25;
let studyTs: boolean = true;

console.log(`ciao sono ${myName}, ho ${age} anni, e sto studiando typescript?? ${studyTs} `);

// 3) Tipizza il parametro della seguente funzione:

const greet = (name: string): string => {
  return "Ciao " + name;
};

console.log(greet("davide"));
// 4) Specifica il tipo di ritorno della seguente funzione:

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(10, 20));

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const calcolaPrezzoConIVA = (prezzo: number): number => {
  return prezzo * 1.22;
};

console.log(calcolaPrezzoConIVA(sum(20, 12)));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatenaLunghezza = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};

console.log(concatenaLunghezza("ciao", "davide"));

// 7) Cos'è un Type Union e come si scrive?

console.log("un type union serve per accettare più dati dati da una variabile : let valore : string | number ...");

// 8)Crea una variabile che possa contenere un numero, null o undefined.

let num1: number | null | undefined;

num1 = 10;
num1 = null;

console.log(num1);

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type settimana = "lunedi" | "martedi" | "mercoledi" | "giovedi" | "venerdi" | "sabato" | "domenica";
let oggi: settimana;
oggi = "mercoledi";
console.log(oggi);

// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3];

const numbers: number[] = [1, 2, 3];

const numbers2: Array<number> = [1, 2, 3];

console.log(numbers, numbers2);

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const dati: [string, string, string, number, number] = ["uno", "due", "tre", 4, 5];

// 12) Qual è la differenza tra type e interface?

console.log(" type viene utilizzato per definire tipi primitivi e oggetti , interface per le classi, type non può essere esteso invece interface si,");

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}

const utente: Persona = {
  firstname: "Davide",
  lastname: "Chiarelli",
  age: 25,
};

console.log(utente.firstname);

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface Utente {
  email: string;
  telefono?: string;
}
const utente1: Utente = {
  email: "davidechiarelli@gmail.com",
};

console.log(utente1.email);

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Studente {
  nome: string;
  voto: number;
}

const studenti: Studente[] = [
  { nome: "Alice", voto: 28 },
  { nome: "Marco", voto: 30 },
  { nome: "Giulia", voto: 25 },
];

console.log(studenti);

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  marca: string;
  modello: string;
  anno: number;
}

interface Auto extends Veicolo {
  porte: number;
  rifornimento: "benzina" | "diesel" | "elettrico" | "ibrido";
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const auto: Auto = {
  marca: "dacia",
  modello: "duster",
  anno: 2024,
  porte: 5,
  rifornimento: "ibrido",
};

console.log(auto);

// 18) Cosa sono i Generics in TypeScript?

console.log(" ci permettono di creare componenti riutilizzabili mantenendo la sicurezza di tipo");

// 19) È possibile avere più tipi generici in un'interfaccia?

console.log("si");

// 20) Crea un'interfaccia generica per una risposta API.
