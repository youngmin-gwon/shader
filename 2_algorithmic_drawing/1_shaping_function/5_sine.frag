#ifdef GL_ES
precision mediump float;
#endif
#define PI  3.14159265359

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float plot(vec2 st, float pct) {
    float width = 0.02;
    return smoothstep(pct - width, pct, st.y) - smoothstep(pct, pct + width, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    // float y = step(0.5, st.x);
    // smoothstep: 두 값 범위 안에서 보간시켜주는 방법
    // float y = smoothstep(0.1, 0.9, st.x);

    float y = abs(sin(fract(2.0 * u_time + st.x)));

    vec3 color = vec3(y);

    float pct = plot(st, y);

    color = (1.0 - pct) * color + pct * vec3(1.0, 0.0, 0.0);

    gl_FragColor = vec4(color, 1.0);
}