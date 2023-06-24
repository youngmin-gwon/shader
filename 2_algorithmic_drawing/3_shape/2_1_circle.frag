#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circle(in vec2 _st, in float _radius) {
    vec2 dist = _st - vec2(0.5);
    return 1. - smoothstep(_radius - (_radius * 0.01), _radius + (_radius * 0.01), dot(dist, dist) * 4.0);
}

void main() {
    float time_loop = abs(0.5 * sin(u_time / 6.0));
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    // vec3 color = vec3(step(0.4, distance(st, vec2(time_loop)) + distance(st, vec2(1. - time_loop))));

    // vec3 color = vec3(step(0.4, distance(st, vec2(time_loop)) * distance(st, vec2(1. - time_loop))));

    // vec3 color = vec3(step(0.4, min(distance(st, vec2(time_loop)), distance(st, vec2(1. - time_loop)))));

    // vec3 color = vec3(step(0.4, max(distance(st, vec2(time_loop)), distance(st, vec2(1. - time_loop)))));

    vec3 color = vec3(step(0.4, pow(distance(st, vec2(time_loop)), distance(st, vec2(1. - time_loop)))));

    gl_FragColor = vec4(color, 1.0);
}
