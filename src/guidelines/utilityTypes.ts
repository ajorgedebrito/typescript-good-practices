// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
// Omit ✅

interface Player {
    id: number;
    name: string;
    position: string;
    photo: string;
}

// ❌ outra opção utilizar ? em cada prop
// interface UpdatePlayer {
//   name?: string;
//   position?: string;
//   photo?: string;
// }

function updatePlayer(
    playerId: Player["id"],
    // ✅ utilizar o Omit
    updatedPlayer: Partial<Omit<Player, "id" | "photo">>
) {
    console.log(playerId);
    console.log(updatedPlayer.name);
    // Property 'photo' does not exist on type 'Partial<Omit<Player, "id" | "photo">>'
    console.log(updatedPlayer.photo);
}

updatePlayer(12, {name: 'Brito', position: 'Forward'})

// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
// Record ✅

type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const color: Record<Properties, RGB | string> = {
    red: [255, 0, 0],
    green: "green",
    blue: "blue",
};

export { };