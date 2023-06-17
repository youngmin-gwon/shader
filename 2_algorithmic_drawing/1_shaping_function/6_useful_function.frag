#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float plot(vec2 st, float pct) {
    float width = 0.03;
    return smoothstep(pct + width, pct, st.y) - smoothstep(pct, pct - width, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    // mod
    // float pct = plot(st, mod(st.x, 0.5));

    // fract
    // float pct = plot(st, fract(2.0 * st.x));

    // ceil
    // float pct = plot(st, ceil(2.0 * st.x));

    // floor
    // float pct = plot(st, floor(2.0 * st.x));

    // abs
    // float pct = plot(st, abs(2.0 * st.x));

    // clamp
    // float pct = plot(st, clamp(2.0 * st.x, 0.5, 1.0));

    // min
    // float pct = plot(st, min(2.0 * st.x, 1.0));

    // min
    float pct = plot(st, max(2.0 * st.x, 0.5));

    vec3 color = pct * vec3(1.0, 0.0, 0.0);
    gl_FragColor = vec4(color, 1.0);
}
