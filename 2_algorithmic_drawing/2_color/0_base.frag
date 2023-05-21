#ifdef GL_ES
precision mediump float;
#endif

void main() {
    // vec4 vector;

    // vector[0] = vector.r = vector.x = vector.s;
    // vector[1] = vector.g = vector.y = vector.t;
    // vector[2] = vector.b = vector.z = vector.p;
    // vector[2] = vector.a = vector.w = vector.q;

    vec3 yellow, magenta, green;

    yellow.rg = vec2(1.0);
    yellow[2] = 0.0;

    magenta = yellow.rbg;

    green = yellow.bgb;

    gl_FragColor = vec4(yellow, 1.0);

}