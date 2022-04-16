
let div = document.getElementById('content');
let canvas = document.createElement("canvas");
div.appendChild(canvas);
let h = (div.clientWidth / 1.5) & 0xFFFE;
canvas.width = h * 1.5;
canvas.height = h;
canvas.style.borderRadius = "4px";
let gl = canvas.getContext("webgl");
gl.clearColor(1.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

class App {
    constructor() {
        this.t1 = 0;
        this.t0 = 0;
        this.dt = 0;
        this.setup();
    }

    setup() {
        // Here are three vertices for the triangle.
        // They are laid out [X1, Y1, Z1, X2, Y2, Z2, X3, Y3, Z3]
        const positions = new Float32Array([
            -1.0, -1.0, 0.0,    // Bottom left
            1.0, -1.0, 0.0,     // Bottom right
            0.0, 1.0, 0.0       // Center up
        ]);

        // Here are three colors for each vertex.
        // They are laid out [R1, G1, B1, R2, B2, G2, R3, G3, B3]
        const colors = new Float32Array([
            1.0, 0.5, 0.0,  // Orange
            0.0, 1.0, 0.5,  // Azure
            0.5, 0.0, 1.0   // Purple
        ]);

        const MaxVertexCount = 16;
        const NumPositionComponents = 3;
        const NumColorComponents = 3;
        const SizeOfFloat = 4;
        const PositionsSize = MaxVertexCount * NumPositionComponents * SizeOfFloat;
        const ColorsSize = MaxVertexCount * NumColorComponents * SizeOfFloat;
        const BufferSize = PositionsSize + ColorsSize;

        const PositionAttribLocation = 0;
        const ColorAttribLocation = 1;

        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, BufferSize, gl.STATIC_DRAW);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, positions);
        gl.bufferSubData(gl.ARRAY_BUFFER, PositionsSize, colors);
        gl.enableVertexAttribArray(PositionAttribLocation);
        gl.vertexAttribPointer(PositionAttribLocation, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(ColorAttribLocation);
        gl.vertexAttribPointer(ColorAttribLocation, 3, gl.FLOAT, false, 0, PositionsSize);

        // Setup shaders
        const vshaderSource = `
uniform mat4 mvp_matrix;

attribute vec3 a_position;
attribute vec3 a_color;

varying vec4 v_color;

void main(void) {
  v_color = vec4(a_color, 1.0);
  gl_Position = mvp_matrix * vec4(a_position, 1.0);
}`
        const fshaderSource = `
precision mediump float;

varying vec4 v_color;

void main(void) {
  gl_FragColor = v_color;
}`
        this.vshader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(this.vshader, vshaderSource);
        gl.compileShader(this.vshader);
        if (!gl.getShaderParameter(this.vshader, gl.COMPILE_STATUS))
            console.log(gl.getShaderInfoLog(this.vshader));

        this.fshader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(this.fshader, fshaderSource);
        gl.compileShader(this.fshader);
        if (!gl.getShaderParameter(this.fshader, gl.COMPILE_STATUS))
            console.log(gl.getShaderInfoLog(this.fshader));

        this.program = gl.createProgram();
        gl.bindAttribLocation(this.program, PositionAttribLocation, "a_position");
        gl.bindAttribLocation(this.program, ColorAttribLocation, "a_color");
        gl.attachShader(this.program, this.vshader);
        gl.attachShader(this.program, this.fshader);
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
            console.log(gl.getProgramInfoLog(this.program));
    }

    update(dtInSeconds) {

    }

    draw() {
        gl.clearColor(Math.abs(Math.sin(this.t1)) * 1.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.useProgram(this.program);
        const mvpMatrixLoc = gl.getUniformLocation(this.program, "mvp_matrix");
        if (mvpMatrixLoc) {
            const sx = Math.abs(Math.sin(this.t1));
            const sy = Math.abs(Math.sin(this.t1));
            // Scaling matrix in Row major format
            const S = mat4(
                sx, 0, 0, 0,
                0, sy, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            );

            const cosTheta = Math.cos(this.t1);
            const sinTheta = Math.sin(this.t1);
            // Rotation matrix in Row major format
            const R = mat4(
                cosTheta, -sinTheta, 0, 0,
                sinTheta, cosTheta, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            );

            const M = concat(S, R);

            gl.uniformMatrix4fv(mvpMatrixLoc, false, M);
        }
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    mainloop() {
        let self = this;
        requestAnimationFrame((t) => {
            let tSeconds = t / 1000.0;
            self.t0 = self.t1;
            self.t1 = tSeconds;
            self.dt = self.t1 - self.t0;
            self.update(self.dt);
            self.draw();
            self.mainloop();
        });
    }
}

let app = new App();
app.mainloop();
