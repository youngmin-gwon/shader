#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circle(in vec2 _st, in float _radius) {
    vec2 dist = _st - vec2(0.5);
    return 1. - smoothstep(_radius - (_radius * 0.01), _radius + (_radius * 0.01), dot(dist, dist) * 4.0);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    vec3 color = vec3(step(0.45, distance(vec2(0.5), st)));

    // vec3 color = vec3(circle(st, 0.8));

    gl_FragColor = vec4(color, 1.0);
}
