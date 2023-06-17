#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float plot(vec2 st, float pct) {
    float width = 0.02;
    return smoothstep(pct - width, pct, st.y) - smoothstep(pct, pct + width, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    // step: 보간법 함수
    //  - parameter1: 경계나 한계점
    //  - parameter2: 체크하거나 넘길 값
    float y = step(0.5, st.x);

    vec3 color = vec3(y);

    float pct = plot(st, y);

    color = (1.0 - pct) * color + pct * vec3(1.0, 0.0, 0.0);

    gl_FragColor = vec4(color, 1.0);
}
