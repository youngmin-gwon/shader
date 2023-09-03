#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circle(vec2 uv, vec2 p, float r, float blur) {
    float d = length(uv - p);

    return smoothstep(r, r - blur, d);

}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv -= .5;
    uv.x *= u_resolution.x / u_resolution.y;

    vec4 col = vec4(0.);
    float mask = circle(uv, vec2(.0), .4, 0.05);

    mask -= circle(uv, vec2(-.13, .2), .07, 0.01);
    mask -= circle(uv, vec2(.13, .2), .07, 0.01);

    float mouth = circle(uv, vec2(.0), .3, 0.02);
    mouth -= circle(uv, vec2(0., 0.1), .3, 0.02);

    mask -= mouth;
    col = vec4(1., 1., 0., 1.) * mask;
    gl_FragColor = vec4(col);
}
