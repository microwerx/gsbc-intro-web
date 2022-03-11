
// This is C++ style comment.

/* This is a C-style comment. */

/**
 *
 * @param {number} a This is the length of a triangle.
 * @param {number} b This is the height of a triangle.
 * @returns This returns the length of the diagonal of a right triangle.
 */
function pythagorus(a, b)
{
    return Math.sqrt(a*a + b*b)
}

pythagorus("three", 4)
