let varAny: any; // ❌ sempre que dizemos que uma variavel é do tipo any estamos a desligar o Typescript "type-check"
let varUnknown: unknown; // ✅ maneira correcta

// varAny.myFunc();
// varUnknown.myFunc(); // Erro: não podemos acessar métodos não declarados em unknown type

interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    age: string;
}

interface IPlayer extends IPerson {
    team: string;
    position: string;
}

interface IReferee extends IPerson {
    association: string;
}

const isReferee = (object: unknown): object is IReferee => {
    if (object !== null && typeof object === "object") {
        return "association" in object;
    }

    return false;
}

const isPlayer = (object: unknown): object is IPlayer => {
    if (object !== null && typeof object === "object") {
        return "position" in object;
    }

    return false;
}

const fetchPerson = async () => {
    const response = await fetch("some-end-point");

    // ❌ Errado
    // Até podiamos dizer que o badPerson é do tipo IPerson mas nesta caso como iamos saber se o badPerson é um Referee?!
    // const badPerson: IPerson = await response.json();

    const badPerson = await response.json();
    // exemplo não declarando qualquer tipo ao tentarmos aceder aos parametros não temos acesso direto aos parametros

    //#region descomentar linha seguinte
    //badPerson.
    //#endregion

    // badPerson

    // ✅ Certo
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