export function feladat01(szinek) {

    let kevertMind = [];
    const kombinaciokSzama = Math.pow(2, szinek.length);
    //console.log("Összes lehetséges kombináció: " + kombinaciokSzama);

    for (let i = 0; i < kombinaciokSzama; i++) {
        let mix = [];

        for (let j = 0; j < szinek.length; j++) {

            if ((i & Math.pow(2, j))) {
                mix.push(szinek[j]);
            }
        }
        if (mix.length > 1) {
            kevertMind.push(mix);
        }
    }
    kevertMind.sort((a, b) => a.length - b.length);

    console.log("Lehetőségek:\n" + kevertMind.join("\n"));

    console.log("Keveréssel előállítható lehetséges színek száma: " + kevertMind.length);

    return kevertMind.length;
}