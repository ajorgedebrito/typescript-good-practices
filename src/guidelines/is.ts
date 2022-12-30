// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

type Species = 'bird' | 'fish'

interface Pet {
    species: Species;
}

// exemplo
class Bird implements Pet {
    public species: Species = 'bird';
    public sing(): void {
        console.log('sing')
    }

    public fly(): void {
        console.log('fly')
    }
}

// ❌ Má prática
// apesar de podermos usar desta forma acaba por não ser a melhor prática
const petIsBirdBoolean = (pet: Pet): boolean => {
    return pet.species === 'bird'
}

// ✅ Boa prática
const petIsBird = (pet: Pet): pet is Bird => {
    return pet.species === 'bird'
}

const p: Pet = new Bird();

// ❌ Má prática
//p.sing(); // ERROR: Property 'sing' does not exist on type 'Pet'.
if (petIsBirdBoolean(p)) {
    //p.sing(); // ERROR: Property 'sing' does not exist on type 'Pet'.

    // solução para esta situação :(
    (p as Bird).sing();
}

// ✅ Boa prática
if (petIsBird(p)) {
    p.sing(); // o compilador reconhece que a variavel é do tipo Bird e sabe que tem o metodo sing
}

export {}