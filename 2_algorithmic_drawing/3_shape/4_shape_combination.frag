#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    st.x *= u_resolution.x / u_resolution.y;
    vec3 color = vec3(0.0);
    float d = 0.0;

    // Remap the space to -1. to 1.
    st = st * 2. - 1.;

    // Number of sides of your shape
    int n = 3;

    // Angle and radius from the current pixel
    float a = atan(st.x, st.y) + PI;
    float r = TWO_PI / float(n);

    // Shaping function that modulate the distance
    d = cos(floor(.5 + a / r) * r - a) * length(st);

    color = vec3(1.0 - smoothstep(.4, .41, d));
    // color = vec3(d);

    gl_FragColor = vec4(color, 1.0);
}