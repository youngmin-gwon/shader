#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

vec4 _magenta() {
    return vec4(1.0, 0.0, 1.0, 1.0);
}

void main() {
    gl_FragColor = _magenta();

}
