#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float pct = 0.0;

    // a., The distance from the pixel to the center
    // pct = distance(st, vec2(0.5));

    // b. The length of the vector from the pxel to the center
    // vec2 toCenter = vec2(0.5) - st;
    // pct = length(toCenter);

    // c. The square root of the vector from the pixel to the center
    vec2 toCenter = vec2(0.5) - st;
    pct = sqrt(toCenter.x * toCenter.x + toCenter.y * toCenter.y);

    vec3 color = vec3(pct);
    gl_FragColor = vec4(color, 1.0);

}
