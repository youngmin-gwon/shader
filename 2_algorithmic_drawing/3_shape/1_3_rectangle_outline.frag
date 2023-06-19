#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec2 bl = step(0.1, st - 0.1);
    float pct = bl.x * bl.y;

    vec3 color = vec3(pct);
    gl_FragColor = vec4(color, 1.0);

}