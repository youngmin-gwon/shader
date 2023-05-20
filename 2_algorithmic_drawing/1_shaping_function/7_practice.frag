
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

float mountain_graph(float x) {
    return 1.0 - pow(abs(x * 2.0 - 1.0), 0.5);
}

float triangle_graph(float x) {
    return 1.0 - pow(abs(x * 2.0 - 1.0), 1.0);
}

// reference: 
// - https://www.flickr.com/photos/kynd/9546075099
// - https://iquilezles.org/articles/functions/
// - https://graphtoy.com

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float pct = plot(st, triangle_graph(st.x));

    vec3 color = pct * vec3(1.0, 0.0, 0.0);
    gl_FragColor = vec4(color, 1.0);
}