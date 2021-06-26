// hsv to rgb color converter
// code modified from https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
// hsv values from 0 < x < 1
function hsv_to_rgb(h, s, v) {
    let h_i = parseInt(h * 6);
    let f = h * 6 - h_i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    const dict = {
        0: [v, t, p],
        1: [q, v, p],
        2: [p, v, t],
        3: [p, q, v],
        4: [t, p, v],
        5: [v, p, q],
    };
    const [r, g, b] = dict[h_i];

    return [parseInt((r * 256), 10), parseInt((g * 256), 10), parseInt((b * 256), 10)];
}

export default function make_color(num, saturation, value) {
    // get rgb values as hexadecimals
    const [r, g, b] = hsv_to_rgb(num, saturation, value)
        // convert to two-digit hexadecimal
        .map((num) => num.toString(16).padStart(2, "0"));
    // return rgb string
    return `#${r}${g}${b}`;
}