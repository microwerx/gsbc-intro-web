

/**
 * @param{number} x The x coordinate for the complex variable Z = X + iY.
 * @param{number} y The y coordinate for the complex variable Z = X + iY.
 * @param{number} n The maximum number of iterations to try.
 * @returns{number[]}
 */
function mandelbrotValues(x, y, n) {
    let values = []
    const Creal = x;
    const Cimag = y;
    let Zreal = 0;
    let Zimag = 0;
    var i = 0;
    for (; i < n; i++) {
        value = Zreal.toString() + " + " + Zimag.toString() + "i";
        values.push(value);

        // calculate the next value of Z.
        // The equation is Z_{i+1} = Z_i^2 + C.
        // Expanding, we get
        // Z_{i+1} = (Zr + i*Zi)^2 + C = (Zr*Zr + 2*ZrZi - Zi*Zi) + C
        // Z_{i+1} = Re(Zr*Zr - Zi*Zi + Cr) + Im(2*Zr*Zi + Ci)
        temp = Zreal*Zreal - Zimag*Zimag + Creal;
        Zimag = 2*Zreal*Zimag + Cimag;
        Zreal = temp;

        if (Zreal*Zreal + Zimag*Zimag > 2*2)
        {
            i = 0;
            break;
        }
    }
    if (i < n)
        values.push("Not in set")
    else if (i == 0)
        values.push("In set")
    else
        values.push("not enough iterations")
    return values
}

/**
 * @param{number} x The x coordinate for the complex variable Z = X + iY.
 * @param{number} y The y coordinate for the complex variable Z = X + iY.
 * @param{number} N The maximum number of iterations to try.
 * @returns{number} The number of iterations, or zero if not in the set.
 */
function mandelbrot(x, y, N) {
    const Creal = x;
    const Cimag = y;
    let Zreal = 0;
    let Zimag = 0;
    let ZrealSquared = Zreal*Zreal;
    let ZimagSquared = Zimag*Zimag;
    var iterations = 0;
    for (; iterations < N; iterations++) {
        // calculate the next value of Z.

        // The equation is Z_{i+1} = Z_i^2 + C.
        // Expanding with complex variables, we get
        // Z_{i+1} = (Zr + i*Zi)^2 + C
        //         = (Zr*Zr + 2i*ZrZi - Zi*Zi) + C
        //         = Re(Zr*Zr - Zi*Zi + Cr) + Im(2*Zr*Zi + Ci)

        // Question: why would we calculate Zimag first?
        Zimag = 2*Zreal*Zimag + Cimag;
        Zreal = ZrealSquared - ZimagSquared + Creal;
        ZrealSquared = Zreal*Zreal;
        ZimagSquared = Zimag*Zimag;

        // Check if inside the set or not.
        const magnitude = ZrealSquared + ZimagSquared
        if (magnitude > 2*2)
        {
            break;
        }
    }
    return iterations;
}

mandelbrotDiv = document.getElementById('mandelbrot')

function makeRandomImagePlot() {
    const W = 247 + 1;
    const H = 224 + 1;
    var canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    var ctx = canvas.getContext("2d");
    var image = ctx.createImageData(W, H);
    for (let i = 0; i < W*H*4; i++) {
        if (i%4 == 3)
            image.data[i] = 255;
        else
            image.data[i] = (Math.random() * 255.99) | 0;
    }
    ctx.putImageData(image, 0, 0);
    mandelbrotDiv.appendChild(canvas);
}

/**
 *
 * @param {number} W Width of the image.
 */
function makeMandelbrotPlot(W) {
    const aspect = 2.47/2.24;
    const H = W / aspect;
    const x0 = -2;
    const y0 = -1.12;
    const dx = 2.47 / (W-1);
    const dy = 2.24 / (H-1);
    var canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    var ctx = canvas.getContext("2d");
    var image = ctx.createImageData(W, H);
    const shadesR = [ 100, 150, 200, 250, 50,  100 ];
    const shadesG = [ 150, 200, 250,  50, 100, 100 ];
    const shadesB = [ 200, 250,  50, 100, 150, 100 ];
    const NumShades = 5; // Note, the last color (shades[NumShades]) is for numbers in the set.
    const MaxIterations = 100;
    for (let y = 0; y < H; y++) {
        const my = y0 + y*dy;
        for (let x = 0; x < W; x++) {
            const mx = x0 + x*dx;
            // The image data is a set of 4 values: RGBA. The offset is the location in the array.
            const offset = (y * W + x) * 4;
            const m = mandelbrot(mx, my, MaxIterations);
            let shade = m % NumShades;
            if (m == MaxIterations) {
                shade = NumShades;
            }
            image.data[offset + 0] = shadesR[shade];
            image.data[offset + 1] = shadesG[shade];
            image.data[offset + 2] = shadesB[shade];
            image.data[offset + 3] = 255;
        }
    }
    ctx.putImageData(image, 0, 0);
    mandelbrotDiv.appendChild(canvas);
}

// Make a 2D image of the Mandelbrot set.
makeMandelbrotPlot(320)

// Calculate the results of Mandelbrot set for a specific set of coordinates.
var Zr = 1;
var Zi = -0;
document.getElementById('ZR').innerHTML = Zr.toString();
document.getElementById('ZI').innerHTML = Zi.toString();
var results = mandelbrotValues(Zr, Zi, 100)

// Print the results by appending paragraph nodes to the document body.
for (var result of results)
{
    let textNode = document.createElement("p")
    textNode.textContent = result
    mandelbrotDiv.appendChild(textNode)
}
