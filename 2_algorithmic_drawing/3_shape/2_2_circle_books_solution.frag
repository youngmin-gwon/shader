#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

// The sqrt calculation is expensive.
// Another way to create a similar distance: `dot()`
float circle(in vec2 _st, in float _radius) {
    vec2 dist = _st - vec2(0.5);
    return 1. - smoothstep( //
    _radius - (_radius * 0.01), //
    _radius + (_radius * 0.01), //
    dot(dist, dist) * 4.0 //
    );
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float range = abs(0.2 * sin(u_time));
    vec3 color = vec3(circle(st, 0.3 + range));

    gl_FragColor = vec4(color, 1.0);
}