//https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability

let varAny: any; // ❌ Má prática pois estamos a desligar o Typescript "type-check"
let varUnknown: unknown; // ✅ Boa prática

// varAny.myFunc();
// varUnknown.myFunc(); // Erro: não podemos acessar métodos não declarados em unknown type

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    age: string;
}

interface Player extends Person {
    team: string;
    position: string;
}

interface Referee extends Person {
    association: string;
}

const isReferee = (object: unknown): object is Referee => {
    if (object !== null && typeof object === "object") {
        return "association" in object;
    }

    return false;
}

const isPlayer = (object: unknown): object is Player => {
    if (object !== null && typeof object === "object") {
        return "position" in object;
    }

    return false;
}

const fetchPerson = async () => {
    const response = await fetch("some-end-point");

    // ❌ Má prática
    // Até podiamos dizer que o badPerson é do tipo IPerson mas nesta caso como iamos saber se o badPerson é um Referee?!
    // const badPerson: IPerson = await response.json();

    const badPerson = await response.json();
    // exemplo não declarando qualquer tipo ao tentarmos aceder aos parametros não temos acesso direto aos parametros

    //#region descomentar linha seguinte
    //badPerson.
    //#endregion

    // badPerson

    // ✅ Boa prática
    const goodPerson: unknown = await response.json();

    // exemplo verifição se é IReferee
    if (isReferee(goodPerson)) {
        // ao declarar o :unknown e no caso de ser Referee conseguimos aceder a todos os parametros da forma correcta
        //goodPerson.association;
    }

    if (isPlayer(goodPerson)) {
        // ao declarar o :unknown e no caso de ser player conseguimos aceder a todos os parametros da forma correcta
        //goodPerson.position;
    }
    // goodPerson

}

export {}