

/**
 * Construct a matrix specified in row major form in a column major layout.
 * @param {number} m11 row 1, column 1
 * @param {number} m12 row 1, column 2
 * @param {number} m13 row 1, column 3
 * @param {number} m14 row 1, column 4
 * @param {number} m21 row 2, column 1
 * @param {number} m22 row 2, column 2
 * @param {number} m23 row 2, column 3
 * @param {number} m24 row 2, column 4
 * @param {number} m31 row 3, column 1
 * @param {number} m32 row 3, column 2
 * @param {number} m33 row 3, column 3
 * @param {number} m34 row 3, column 4
 * @param {number} m41 row 4, column 1
 * @param {number} m42 row 4, column 2
 * @param {number} m43 row 4, column 3
 * @param {number} m44 row 4, column 4
 * @returns {Float32Array}
 */
 function mat4(
    m11, m12, m13, m14,
    m21, m22, m23, m24,
    m31, m32, m33, m34,
    m41, m42, m43, m44) {
    // Build array in column major format.
    return new Float32Array([
        m11, m21, m31, m41,
        m12, m22, m32, m42,
        m13, m23, m33, m43,
        m14, m24, m34, m44
    ]);
}

/**
 * Return identity matrix.
 * @returns {Float32Array}
 */
function makeIdentity() {
    return mat4(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1);
}

/**
 * Multiply two matrices together.
 * @param {Float32Array} A
 * @param {Float32Array} B
 * @returns {Float32Array}
 */
function concat(A, B) {
    return new Float32Array([
        A[0] * B[0] + A[4] * B[1] + A[8] * B[2] + A[12] * B[3],
        A[1] * B[0] + A[5] * B[1] + A[9] * B[2] + A[13] * B[3],
        A[2] * B[0] + A[6] * B[1] + A[10] * B[2] + A[14] * B[3],
        A[3] * B[0] + A[7] * B[1] + A[11] * B[2] + A[15] * B[3],
        A[0] * B[4] + A[4] * B[5] + A[8] * B[6] + A[12] * B[7],
        A[1] * B[4] + A[5] * B[5] + A[9] * B[6] + A[13] * B[7],
        A[2] * B[4] + A[6] * B[5] + A[10] * B[6] + A[14] * B[7],
        A[3] * B[4] + A[7] * B[5] + A[11] * B[6] + A[15] * B[7],
        A[0] * B[8] + A[4] * B[9] + A[8] * B[10] + A[12] * B[11],
        A[1] * B[8] + A[5] * B[9] + A[9] * B[10] + A[13] * B[11],
        A[2] * B[8] + A[6] * B[9] + A[10] * B[10] + A[14] * B[11],
        A[3] * B[8] + A[7] * B[9] + A[11] * B[10] + A[15] * B[11],
        A[0] * B[12] + A[4] * B[13] + A[8] * B[14] + A[12] * B[15],
        A[1] * B[12] + A[5] * B[13] + A[9] * B[14] + A[13] * B[15],
        A[2] * B[12] + A[6] * B[13] + A[10] * B[14] + A[14] * B[15],
        A[3] * B[12] + A[7] * B[13] + A[11] * B[14] + A[15] * B[15]
    ]);
}

/**
 * Create a scaling matrix.
 * @param {number} sx scale in x direction
 * @param {number} sy scale in y direction
 * @param {number} sz scale in z direction
 * @returns {Float32Array}
 */
function makeScaling(sx, sy, sz) {
    return mat4(
        sx, 0, 0, 0,
        0, sy, 0, 0,
        0, 0, sz, 0,
        0, 0, 0, 1);
}

/**
 * Return a Z rotation matrix.
 * @param {number} thetaInRadians
 * @returns {Float32Array}
 */
function makeRotationX(thetaInRadians) {
    cosTheta = Math.cos(thetaInRadians);
    sinTheta = Math.sin(thetaInRadians);
    return mat4(
        1, 0, 0, 0,
        0, cosTheta, -sinTheta, 0,
        0, sinTheta, cosTheta, 0,
        0, 0, 0, 1
    );
}

/**
 * Return a Z rotation matrix.
 * @param {number} thetaInRadians
 * @returns {Float32Array}
 */
function makeRotationY(thetaInRadians) {
    cosTheta = Math.cos(thetaInRadians);
    sinTheta = Math.sin(thetaInRadians);
    return mat4(
        cosTheta, 0, -sinTheta, 0,
        0, 1, 0, 0,
        sinTheta, 0, cosTheta, 0,
        0, 0, 0, 1
    );
}

/**
 * Return a Z rotation matrix.
 * @param {number} thetaInRadians
 * @returns {Float32Array}
 */
function makeRotationZ(thetaInRadians) {
    cosTheta = Math.cos(thetaInRadians);
    sinTheta = Math.sin(thetaInRadians);
    return mat4(
        cosTheta, -sinTheta, 0, 0,
        sinTheta, cosTheta, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}

/**
 * Create a Euler angle rotation matrix.
 * @param {number} XAngleInDegrees the angle around the X-axis
 * @param {number} YAngleInDegrees the angle around the Y-axis
 * @param {number} ZAngleInDegrees the angle around the Z-axis
 * @returns {Float32Array}
 */
function makeRotationXYZ(XAngleInDegrees, YAngleInDegrees, ZAngleInDegrees) {
    const RX = makeRotationX(XAngleInDegrees);
    const RY = makeRotationY(YAngleInDegrees);
    const RZ = makeRotationZ(ZAngleInDegrees);
    const M = concat(RX, RY);
    return concat(M, RZ);
}

/**
 * Create a translation matrix.
 * @param {number} tx move in x direction
 * @param {number} ty move in y direction
 * @param {number} tz move in z direction
 * @returns {Float32Array}
 */
function makeTranslation(tx, ty, tz) {
    return mat4(
        1, 0, 0, tx,
        0, 1, 0, ty,
        0, 0, 1, tz,
        0, 0, 0, 1);
}

/**
 * Return a perspective projection matrix.
 * @param {number} fovyInDegrees Vertical Field of View in degrees
 * @param {number} aspectRatio Aspect ratio of the display (w/h)
 * @param {number} znear The near plane
 * @param {number} zfar The far plane
 * @returns {float32Array}
 */
function makePerspective(fovyInDegrees, aspectRatio, znear, zfar) {
    // Compute cotangent(fovy/2)
    const f = 1.0 / Math.tan(Math.PI * fovyInDegrees / 360.0);
    const A = (zfar + znear) / (znear - zfar);
    const B = 2 * zfar * znear / (znear - zfar);
    return mat4(
        f / aspectRatio, 0, 0, 0,
        0, f, 0, 0,
        0, 0, A, B,
        0, 0, -1, 0
    );
}
