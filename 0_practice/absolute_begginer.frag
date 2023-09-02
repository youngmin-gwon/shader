#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    // way to normalise coordinate
    vec2 uv = gl_FragCoord.xy / u_resolution; // 0 <> 1.
    uv -= .5;

    // compensate ratio
    uv.x *= u_resolution.x / u_resolution.y;

    float d = length(uv); // distance from (0,0)
    float r = 0.3;

    float c = smoothstep(r, r - 0.1, d);

    gl_FragColor = vec4(vec3(c), 1.);

}