// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content

// ❌ Má prática
enum BadState {
    Goalkeeper,
    Defender,
    Midfield,
    Forward,
}

BadState.Goalkeeper; // (enum member) BadState.Goalkeeper = 0
BadState.Defender; // (enum member) BadState.Defender = 1
BadState.Midfield; // (enum member) BadState.Midfield = 2
BadState.Forward; // (enum member) BadState.Forward = 3

const badCheckState = (state: BadState) => {
    // :(
}

// podemos passar qualquer valor que não existe no BadState
badCheckState(100);

// ✅ Boa prática
// exemplo1
type GoodState = 'Goalkeeper' | 'Defender' | 'Midfield' | 'Forward';

const goodCheckState = (state: GoodState) => {}

// ❌ Argument of type '"referee"' is not assignable to parameter of type 'GoodState'
goodCheckState('referee');
// ✅
goodCheckState('Goalkeeper');

// exemplo2
enum GoodState2 {
    Goalkeeper = 'Goalkeeper',
    Defender = 'Defender',
    Midfield = 'Midfield',
    Forward = 'Forward',
}

const goodCheckState2 = (state: GoodState2) => {}

// ❌ Argument of type '"referee"' is not assignable to parameter of type 'GoodState2'.
goodCheckState2('referee');

// ✅
goodCheckState('Forward');

export {}