#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 bl = step(vec2(0.1), st);
    vec2 tr = 1.0 - step(vec2(0.9), st);

    color = vec3(bl.x * bl.y * tr.x * tr.y);

    gl_FragColor = vec4(color, 1.0);
}
